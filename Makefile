.PHONY: release build clean

# Usage: make release TAG=v0.4.0

TAG ?= $(error TAG is required. Usage: make release TAG=v0.5.0)

release: build
	git add -A
	git commit -m "$(TAG)"
	git tag $(TAG)
	git push origin main --tags

build:
	./gradlew buildPlugin

clean:
	./gradlew clean
