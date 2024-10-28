import React from 'react';

const mockEmployees = [
  { id: 1, name: "Janez Novak", totalHours: 160, overtime: 20 },
  { id: 2, name: "Ana Kovač", totalHours: 150, overtime: 10 },
  { id: 3, name: "Marko Zupan", totalHours: 170, overtime: 30 },
  { id: 4, name: "Eva Horvat", totalHours: 140, overtime: 5 },
];

function Dashboard() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Pregled zaposlenih</h2>
      <table className="table table-striped">
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
    </div>
  );
}

export default Dashboard;
