import React, { useEffect, useState } from 'react';

/*const mockEmployees = [
  { imePriimek: "Eva Horvat", hours: 140},
];*/

const mockLeaves = [
  { id: 1, employee: "Janez Novak", type: "Sick Leave", startDate: "2023-09-10", endDate: "2023-09-15" },
  { id: 2, employee: "Ana Kovač", type: "Vacation", startDate: "2023-10-01", endDate: "2023-10-07" },
];

function Dashboard() {
  const [employeeHours, setEmployeeHours] = useState([{imePriimek: "Ime Priimek", hours:10}]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/adminDashboard/workHours`)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data)
      setEmployeeHours(data);
    })
    .catch((error) => {
      console.error('Error fetching employee hours data:', error);
    });
  }, [])

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Pregled zaposlenih</h2>
      
      {/* Tabela za pregled zaposlenih */}
      <table className="table table-striped mb-4">
        <thead>
          <tr>
            <th>Ime</th>
            <th>Skupno število ur</th>
            
          </tr>
        </thead>
        <tbody>
          {employeeHours.map((employee, index) => (
            <tr key={index}>
              <td>{employee.imePriimek}</td>
              <td>{employee.hours} ur</td>
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
