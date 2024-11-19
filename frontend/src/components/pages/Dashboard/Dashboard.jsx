import React from 'react';

const mockEmployees = [
  { id: 4, name: "Eva Horvat", totalHours: 140, overtime: 5 },
];

const mockLeaves = [
  { id: 1, employee: "Janez Novak", type: "Sick Leave", startDate: "2023-09-10", endDate: "2023-09-15" },
  { id: 2, employee: "Ana Kovač", type: "Vacation", startDate: "2023-10-01", endDate: "2023-10-07" },
];

function Dashboard() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Pregled zaposlenih</h2>
      
      {/* Tabela za pregled zaposlenih */}
      <table className="table table-striped mb-4">
        <thead>
          <tr>
            <th>Ime</th>
            <th>Skupno število ur</th>
            <th>Nadure</th>
          </tr>
        </thead>
        <tbody>
          {mockEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.totalHours} ur</td>
              <td>{employee.overtime} ur</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Tabela za pregled bolniških in dopustov */}
      <h3 className="mb-4">Bolniške in dopusti</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Zaposleni</th>
            <th>Vrsta</th>
            <th>Datum začetka</th>
            <th>Datum konca</th>
          </tr>
        </thead>
        <tbody>
          {mockLeaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.employee}</td>
              <td>{leave.type}</td>
              <td>{leave.startDate}</td>
              <td>{leave.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
