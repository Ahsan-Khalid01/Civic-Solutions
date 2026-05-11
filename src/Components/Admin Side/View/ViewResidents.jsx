import React from "react";

function ViewResidents() {
  return (
    <div>
      <h2> All Residents</h2>

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
          <tr>
            <td>U-001</td>
            <td>Ahmed Khan</td>
            <td>0300-1234567</td>
            <td>Gulberg, Lahore</td>
            <td>3</td>
            <td>2025-01-15</td>
          </tr>
          <tr>
            <td>U-002</td>
            <td>Sara Ahmed</td>
            <td>0311-9876543</td>
            <td>DHA Phase 5</td>
            <td>1</td>
            <td>2025-02-03</td>
          </tr>
          <tr>
            <td>U-003</td>
            <td>Bilal Malik</td>
            <td>0333-5556677</td>
            <td>Johar Town</td>
            <td>2</td>
            <td>2025-02-18</td>
          </tr>
          <tr>
            <td>U-004</td>
            <td>Fatima Riaz</td>
            <td>0321-4445566</td>
            <td>Model Town</td>
            <td>1</td>
            <td>2025-03-05</td>
          </tr>
          <tr>
            <td>U-005</td>
            <td>Usman Ali</td>
            <td>0345-7778899</td>
            <td>Bahria Town</td>
            <td>4</td>
            <td>2025-03-12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewResidents;