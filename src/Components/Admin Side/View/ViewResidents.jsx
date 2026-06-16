import React, { useState, useEffect } from "react";

function ViewResidents() {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const data = [
      { id: "U-001", name: "Ahmed Khan", phone: "0300-1234567", area: "Gulberg, Lahore", issuesFiled: 3, joinedDate: "2025-01-15" },
      { id: "U-002", name: "Sara Ahmed", phone: "0311-9876543", area: "DHA Phase 5", issuesFiled: 1, joinedDate: "2025-02-03" },
      { id: "U-003", name: "Bilal Malik", phone: "0333-5556677", area: "Johar Town", issuesFiled: 2, joinedDate: "2025-02-18" },
      { id: "U-004", name: "Fatima Riaz", phone: "0321-4445566", area: "Model Town", issuesFiled: 1, joinedDate: "2025-03-05" },
      { id: "U-005", name: "Usman Ali", phone: "0345-7778899", area: "Bahria Town", issuesFiled: 4, joinedDate: "2025-03-12" },
    ];
    setResidents(data);
  }, []);

  return (
    <div>
      <h2>All Residents</h2>
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Area</th>
            <th>Issues Filed</th>
            <th>Joined Date</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident) => (
            <tr key={resident.id}>
              <td>{resident.id}</td>
              <td>{resident.name}</td>
              <td>{resident.phone}</td>
              <td>{resident.area}</td>
              <td>{resident.issuesFiled}</td>
              <td>{resident.joinedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewResidents;