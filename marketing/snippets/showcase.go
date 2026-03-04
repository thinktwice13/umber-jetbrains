package showcase

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"sync"
	"time"
)

const (
	maxRetries     = 3
	requestTimeout = 30 * time.Second
	defaultPort    = 8080
)

// Status represents the health of a service endpoint.
type Status string

const (
	StatusHealthy   Status = "healthy"
	StatusDegraded  Status = "degraded"
	StatusUnhealthy Status = "unhealthy"
)

// HealthCheck defines a periodic service health check.
type HealthCheck interface {
	Name() string
	Check(ctx context.Context) (Status, error)
}

// ServiceRegistry tracks running services and their health.
type ServiceRegistry struct {
	mu       sync.RWMutex
	services map[string]HealthCheck
	results  map[string]Status
}

// NewRegistry creates an empty service registry.
func NewRegistry() *ServiceRegistry {
	return &ServiceRegistry{
		services: make(map[string]HealthCheck),
		results:  make(map[string]Status),
	}
}

// Register adds a health check to the registry.
func (r *ServiceRegistry) Register(hc HealthCheck) {
	r.mu.Lock()
	defer r.mu.Unlock()
	r.services[hc.Name()] = hc
	r.results[hc.Name()] = StatusHealthy
}

// RunChecks executes all health checks concurrently and collects results.
func (r *ServiceRegistry) RunChecks(ctx context.Context) map[string]Status {
	r.mu.RLock()
	checks := make([]HealthCheck, 0, len(r.services))
	for _, hc := range r.services {
		checks = append(checks, hc)
	}
	r.mu.RUnlock()

	ch := make(chan struct {
		name   string
		status Status
	}, len(checks))

	for _, hc := range checks {
		go func(h HealthCheck) {
			status, err := h.Check(ctx)
			if err != nil {
				log.Printf("[warn] check %q failed: %v", h.Name(), err)
				status = StatusUnhealthy
			}
			ch <- struct {
				name   string
				status Status
			}{h.Name(), status}
		}(hc)
	}

	snapshot := make(map[string]Status, len(checks))
	for range checks {
		result := <-ch
		snapshot[result.name] = result.status
	}

	r.mu.Lock()
	for k, v := range snapshot {
		r.results[k] = v
	}
	r.mu.Unlock()

	return snapshot
}

// HandleHealth serves the health endpoint as JSON.
func (r *ServiceRegistry) HandleHealth(w http.ResponseWriter, req *http.Request) {
	ctx, cancel := context.WithTimeout(req.Context(), requestTimeout)
	defer cancel()

	snapshot := r.RunChecks(ctx)

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(snapshot); err != nil {
		http.Error(w, fmt.Sprintf("encode error: %v", err), http.StatusInternalServerError)
	}
}
