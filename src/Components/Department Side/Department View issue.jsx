function DepartmentViewIssue()
{
return (
<>
<div>
      <h2> View All Issues</h2>

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
          <tr>
            <td>CIV-001</td>
            <td>Water Pipe Burst on Main Road</td>
            <td>Water</td>
            <td>Gulberg III, Lahore</td>
            <td>Pending</td>
            <td>Critical</td>
            <td>2025-04-20</td>
            <td>Ahmed Khan</td>
            <td>0300-1234567</td>
            <td>Flooding due to burst pipe</td>
            <td>Unassigned</td>
          </tr>
          <tr>
            <td>CIV-002</td>
            <td>Street Lights Not Working</td>
            <td>Electricity</td>
            <td>DHA Phase 5</td>
            <td>In Progress</td>
            <td>Medium</td>
            <td>2025-04-19</td>
            <td>Sara Ahmed</td>
            <td>0311-9876543</td>
            <td>Lights not working at night</td>
            <td>Electricity Dept</td>
          </tr>
          <tr>
            <td>CIV-003</td>
            <td>Garbage Not Collected</td>
            <td>Sanitation</td>
            <td>Johar Town</td>
            <td>Pending</td>
            <td>High</td>
            <td>2025-04-18</td>
            <td>Bilal Malik</td>
            <td>0333-5556677</td>
            <td>Garbage not collected for 2 weeks</td>
            <td>Unassigned</td>
          </tr>
          <tr>
            <td>CIV-004</td>
            <td>Gas Pressure Low</td>
            <td>Gas</td>
            <td>Model Town</td>
            <td>Resolved</td>
            <td>Medium</td>
            <td>2025-04-15</td>
            <td>Fatima Riaz</td>
            <td>0321-4445566</td>
            <td>Very low gas pressure</td>
            <td>Gas Dept</td>
          </tr>
          <tr>
            <td>CIV-005</td>
            <td>Road Potholes</td>
            <td>Roads</td>
            <td>Bahria Town</td>
            <td>In Progress</td>
            <td>High</td>
            <td>2025-04-14</td>
            <td>Usman Ali</td>
            <td>0345-7778899</td>
            <td>Large potholes damaging vehicles</td>
            <td>Roads Dept</td>
          </tr>
          <tr>
            <td>CIV-006</td>
            <td>School Wall Cracked</td>
            <td>Education</td>
            <td>Ravi Road</td>
            <td>Pending</td>
            <td>Critical</td>
            <td>2025-04-13</td>
            <td>Amna Sheikh</td>
            <td>0301-2223344</td>
            <td>Dangerous cracks for students</td>
            <td>Unassigned</td>
          </tr>
          <tr>
            <td>CIV-007</td>
            <td>Sewerage Overflow</td>
            <td>Sanitation</td>
            <td>Iqbal Town</td>
            <td>Pending</td>
            <td>Critical</td>
            <td>2025-04-12</td>
            <td>Hassan Raza</td>
            <td>0312-3334455</td>
            <td>Sewage on street health hazard</td>
            <td>Unassigned</td>
          </tr>
          <tr>
            <td>CIV-008</td>
            <td>Transformer Sparking</td>
            <td>Electricity</td>
            <td>Gulshan-e-Ravi</td>
            <td>Resolved</td>
            <td>Critical</td>
            <td>2025-04-10</td>
            <td>Zainab Qadir</td>
            <td>0322-6667788</td>
            <td>Electric transformer sparking</td>
            <td>Electricity Dept</td>
          </tr>
        </tbody>
      </table>
    </div>

</>
)
}
export default DepartmentViewIssue;