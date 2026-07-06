import { useState, useEffect } from "react";
import { viewIssues } from "../../../serviceApi";

function ViewIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    viewIssues().then(setIssues);
  }, []);

  return (
    <div>
      <h2>All Issues</h2>
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th><th>Title</th><th>Category</th><th>Location</th>
            <th>Status</th><th>Priority</th><th>Date</th><th>Resident</th>
            <th>Phone</th><th>Description</th><th>Department</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>{issue.title}</td>
              <td>{issue.category}</td>
              <td>{issue.location}</td>
              <td>{issue.status}</td>
              <td>{issue.priority}</td>
              <td>{issue.issueDate}</td>
              <td>{issue.residentEmail}</td>
              <td>{issue.phone}</td>
              <td>{issue.description}</td>
              <td>{issue.departmentId ?? "Unassigned"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewIssues;