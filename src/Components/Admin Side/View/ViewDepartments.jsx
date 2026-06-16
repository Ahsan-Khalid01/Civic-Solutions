import React, { useState, useEffect } from "react";

function ViewDepartments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const data = [
      { id: "D-01", name: "Water & Sanitation", head: "Engr. Tariq Mahmood", phone: "042-1111111", email: "water@civictrack.pk", area: "Lahore Central", totalIssues: 18, resolved: 12 },
      { id: "D-02", name: "Electricity Department", head: "Engr. Salman Raza", phone: "042-2222222", email: "elec@civictrack.pk", area: "Lahore East", totalIssues: 24, resolved: 19 },
      { id: "D-03", name: "Gas Department", head: "Engr. Kamran Ali", phone: "042-3333333", email: "gas@civictrack.pk", area: "Lahore West", totalIssues: 11, resolved: 9 },
      { id: "D-04", name: "Roads & Infrastructure", head: "Engr. Adeel Chaudhry", phone: "042-4444444", email: "roads@civictrack.pk", area: "All Lahore", totalIssues: 31, resolved: 21 },
      { id: "D-05", name: "Education Department", head: "Dr. Nadia Hussain", phone: "042-5555555", email: "edu@civictrack.pk", area: "Lahore North", totalIssues: 8, resolved: 4 },
      { id: "D-06", name: "Sanitation Department", head: "Mr. Zafar Iqbal", phone: "042-6666666", email: "san@civictrack.pk", area: "Lahore South", totalIssues: 22, resolved: 15 },
    ];
    setDepartments(data);
  }, []);

  return (
    <div>
      <h2>All Departments</h2>
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Head</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Area</th>
            <th>Total Issues</th>
            <th>Resolved</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id}>
              <td>{dept.id}</td>
              <td>{dept.name}</td>
              <td>{dept.head}</td>
              <td>{dept.phone}</td>
              <td>{dept.email}</td>
              <td>{dept.area}</td>
              <td>{dept.totalIssues}</td>
              <td>{dept.resolved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDepartments;