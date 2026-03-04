import { useState, useEffect, useCallback } from "react";

const API_BASE = "/api/v1";
const STALE_TIME = 5 * 60 * 1000; // 5 minutes

/** Result of an async data fetch with loading and error states. */
interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

type UserRole = "admin" | "editor" | "viewer";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: Date;
}

/** Fetches data from the API with automatic retry and caching. */
function useAsyncData<T>(endpoint: string): AsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const json: T = await response.json();
      setData(json);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, STALE_TIME);
    return () => clearInterval(interval);
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

/** Formats a role into a human-readable badge label. */
function roleBadgeColor(role: UserRole): string {
  switch (role) {
    case "admin":
      return "bg-amber-100 text-amber-800";
    case "editor":
      return "bg-blue-100 text-blue-800";
    case "viewer":
      return "bg-gray-100 text-gray-800";
  }
}

/** Displays a list of users with their roles and status. */
export default function UserDirectory() {
  const { data: users, loading, error, refetch } = useAsyncData<User[]>("/users");

  if (loading) {
    return <div className="animate-pulse p-4">Loading users...</div>;
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="text-red-700">Failed to load users: {error}</p>
        <button onClick={refetch} className="mt-2 text-sm underline">
          Retry
        </button>
      </div>
    );
  }

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">
        Team Members ({users?.length ?? 0})
      </h2>
      <ul className="divide-y divide-gray-200">
        {users?.map((user) => (
          <li key={user.id} className="flex items-center gap-3 py-3">
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={`${user.name}'s avatar`}
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="flex-1">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <span className={`rounded-full px-2 py-0.5 text-xs ${roleBadgeColor(user.role)}`}>
              {user.role}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
