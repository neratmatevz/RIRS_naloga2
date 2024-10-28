import React from 'react';

const mockWorkHours = [
  { date: "2023-10-01", hoursWorked: 8 },
  { date: "2023-10-02", hoursWorked: 7.5 },
  { date: "2023-10-03", hoursWorked: 8 },
  { date: "2023-10-04", hoursWorked: 6.5 },
  { date: "2023-10-05", hoursWorked: 8 },
];

function WorkHours() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Opravljene ure</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Datum</th>
            <th>Število ur</th>
          </tr>
        </thead>
        <tbody>
          {mockWorkHours.map((workDay, index) => (
            <tr key={index}>
              <td>{workDay.date}</td>
              <td>{workDay.hoursWorked} ur</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkHours;
