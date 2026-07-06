import { useState, useEffect } from "react";
import { viewDepartments } from "../../../serviceApi";

function ViewDepartments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    viewDepartments().then(setDepartments);
  }, []);

  return (
    <div>
      <h2>All Departments</h2>
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Postal Code</th>
            <th>Category</th>
            <th>Head</th>
            <th>Official Phone</th>
            <th>Emergency Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id}>
              <td>{dept.id}</td>
              <td>{dept.departmentName}</td>
              <td>{dept.city}</td>
              <td>{dept.postalCode}</td>
              <td>{dept.category}</td>
              <td>{dept.headName}</td>
              <td>{dept.officialPhone}</td>
              <td>{dept.emergencyPhone}</td>
              <td>{dept.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDepartments;
