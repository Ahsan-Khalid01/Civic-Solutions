import React from "react";

function ViewDepartments() {
  return (
    <div>
      <h2> All Departments</h2>

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
          <tr>
            <td>D-01</td>
            <td>Water & Sanitation</td>
            <td>Engr. Tariq Mahmood</td>
            <td>042-1111111</td>
            <td>water@civictrack.pk</td>
            <td>Lahore Central</td>
            <td>18</td>
            <td>12</td>
          </tr>
          <tr>
            <td>D-02</td>
            <td>Electricity Department</td>
            <td>Engr. Salman Raza</td>
            <td>042-2222222</td>
            <td>elec@civictrack.pk</td>
            <td>Lahore East</td>
            <td>24</td>
            <td>19</td>
          </tr>
          <tr>
            <td>D-03</td>
            <td>Gas Department</td>
            <td>Engr. Kamran Ali</td>
            <td>042-3333333</td>
            <td>gas@civictrack.pk</td>
            <td>Lahore West</td>
            <td>11</td>
            <td>9</td>
          </tr>
          <tr>
            <td>D-04</td>
            <td>Roads & Infrastructure</td>
            <td>Engr. Adeel Chaudhry</td>
            <td>042-4444444</td>
            <td>roads@civictrack.pk</td>
            <td>All Lahore</td>
            <td>31</td>
            <td>21</td>
          </tr>
          <tr>
            <td>D-05</td>
            <td>Education Department</td>
            <td>Dr. Nadia Hussain</td>
            <td>042-5555555</td>
            <td>edu@civictrack.pk</td>
            <td>Lahore North</td>
            <td>8</td>
            <td>4</td>
          </tr>
          <tr>
            <td>D-06</td>
            <td>Sanitation Department</td>
            <td>Mr. Zafar Iqbal</td>
            <td>042-6666666</td>
            <td>san@civictrack.pk</td>
            <td>Lahore South</td>
            <td>22</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewDepartments;