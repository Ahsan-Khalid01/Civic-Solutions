import { useState, useEffect } from "react";
import { viewResidents } from "../../../serviceApi";

function ViewResidents() {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    viewResidents()
      .then(setResidents)
      .finally(() => setLoading(false));
  }, []);

  const filtered = residents.filter((resident) => {
    const query = search.toLowerCase();
    return (
      resident.FullName?.toLowerCase().includes(query) ||
      resident.Email?.toLowerCase().includes(query) ||
      resident.City?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-end mb-4 gap-3">
        <div>
          <h2 className="fw-bold mb-1">All Residents</h2>
          <p className="text-muted mb-0">
            Every resident registered on the platform.
          </p>
        </div>
        <input
          type="text"
          className="form-control"
          style={{ maxWidth: "280px" }}
          placeholder="Search by name, email, city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-responsive shadow-sm">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>CNIC</th>
              <th>Phone</th>
              <th>Email</th>
              <th>City</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="7" className="text-center text-muted py-4">
                  Loading residents...
                </td>
              </tr>
            )}
            {!loading && filtered.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-muted py-4">
                  No residents found.
                </td>
              </tr>
            )}
            {!loading &&
              filtered.map((resident) => (
                <tr key={resident.id}>
                  <td>
                    <span className="badge bg-secondary">{resident.id}</span>
                  </td>
                  <td className="fw-semibold">{resident.FullName}</td>
                  <td>{resident.CNIC}</td>
                  <td>{resident.Phone}</td>
                  <td>{resident.Email}</td>
                  <td>{resident.City}</td>
                  <td>{resident.Area}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewResidents;
