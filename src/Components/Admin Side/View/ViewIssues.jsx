import React, { useState, useEffect } from "react";

function ViewIssues() {
  const [issues, setIssues] = useState([]);  // start empty

  useEffect(() => {
    
    
    const data = [
      { id: "CIV-001", title: "Water Pipe Burst on Main Road", category: "Water", location: "Gulberg III, Lahore", status: "Pending", priority: "Critical", date: "2025-04-20", resident: "Ahmed Khan", phone: "0300-1234567", description: "Flooding due to burst pipe", department: "Unassigned" },
      { id: "CIV-002", title: "Street Lights Not Working", category: "Electricity", location: "DHA Phase 5", status: "In Progress", priority: "Medium", date: "2025-04-19", resident: "Sara Ahmed", phone: "0311-9876543", description: "Lights not working at night", department: "Electricity Dept" },
      { id: "CIV-003", title: "Garbage Not Collected", category: "Sanitation", location: "Johar Town", status: "Pending", priority: "High", date: "2025-04-18", resident: "Bilal Malik", phone: "0333-5556677", description: "Garbage not collected for 2 weeks", department: "Unassigned" },
      { id: "CIV-004", title: "Gas Pressure Low", category: "Gas", location: "Model Town", status: "Resolved", priority: "Medium", date: "2025-04-15", resident: "Fatima Riaz", phone: "0321-4445566", description: "Very low gas pressure", department: "Gas Dept" },
      { id: "CIV-005", title: "Road Potholes", category: "Roads", location: "Bahria Town", status: "In Progress", priority: "High", date: "2025-04-14", resident: "Usman Ali", phone: "0345-7778899", description: "Large potholes damaging vehicles", department: "Roads Dept" },
      { id: "CIV-006", title: "School Wall Cracked", category: "Education", location: "Ravi Road", status: "Pending", priority: "Critical", date: "2025-04-13", resident: "Amna Sheikh", phone: "0301-2223344", description: "Dangerous cracks for students", department: "Unassigned" },
      { id: "CIV-007", title: "Sewerage Overflow", category: "Sanitation", location: "Iqbal Town", status: "Pending", priority: "Critical", date: "2025-04-12", resident: "Hassan Raza", phone: "0312-3334455", description: "Sewage on street health hazard", department: "Unassigned" },
      { id: "CIV-008", title: "Transformer Sparking", category: "Electricity", location: "Gulshan-e-Ravi", status: "Resolved", priority: "Critical", date: "2025-04-10", resident: "Zainab Qadir", phone: "0322-6667788", description: "Electric transformer sparking", department: "Electricity Dept" },
    ];
    setIssues(data);
  }, []);

  return (
    <div>
      <h2>All Issues</h2>
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Location</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Date</th>
            <th>Resident</th>
            <th>Phone</th>
            <th>Description</th>
            <th>Department</th>
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
              <td>{issue.date}</td>
              <td>{issue.resident}</td>
              <td>{issue.phone}</td>
              <td>{issue.description}</td>
              <td>{issue.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewIssues;