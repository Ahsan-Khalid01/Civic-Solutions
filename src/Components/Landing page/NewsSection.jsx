import { useState, useEffect } from "react";
import { viewIssues } from "../../serviceApi";

function NewsSection() {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUpdates() {
      try {
        const issues = await viewIssues();

        const reportedEvents = issues.map((issue) => ({
          type: "reported",
          headline: `New ${issue.category} issue reported in ${issue.location}`,
          date: issue.created_at,
        }));

        const resolvedEvents = issues
          .filter((issue) => issue.status === "Resolved")
          .map((issue) => ({
            type: "resolved",
            headline: `${issue.category} issue resolved in ${issue.location}`,
            date: issue.updated_at,
          }));

        const combined = [...reportedEvents, ...resolvedEvents]
          .filter((event) => event.date)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);

        setUpdates(combined);
      } catch (error) {
        console.error("Failed to load updates:", error);
      } finally {
        setLoading(false);
      }
    }

    loadUpdates();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Latest Updates</h2>

      {loading && (
        <p className="text-center text-muted">Loading latest updates...</p>
      )}

      {!loading && updates.length === 0 && (
        <p className="text-center text-muted">
          No activity to show yet. Check back soon.
        </p>
      )}

      {!loading && updates.length > 0 && (
        <div className="row g-4">
          {updates.map((event, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <span
                    className={`badge mb-2 ${
                      event.type === "resolved"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {event.type === "resolved" ? "Resolved" : "New Report"}
                  </span>
                  <h5>{event.headline}</h5>
                  <p className="text-muted small mb-0">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsSection;
