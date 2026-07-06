import { useState, useEffect } from "react";
import { viewResidents } from "../../../serviceApi";

function ViewResidents() {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    viewResidents().then(setResidents);
  }, []);

  return (
    <div>
      <h2>All Residents</h2>
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
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
          {residents.map((resident) => (
            <tr key={resident.id}>
              <td>{resident.id}</td>
              <td>{resident.FullName}</td>
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
  );
}

export default ViewResidents;
