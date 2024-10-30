import React from 'react';

const mockAbsences = [
  { id: 1, name: "Janez Novak", type: "Dopust", startDate: "2023-09-10", endDate: "2023-09-15" }, // komentar
  { id: 2, name: "Ana Kovač", type: "Bolniška", startDate: "2023-09-16", endDate: "2023-09-17" },
  { id: 3, name: "Marko Zupan", type: "Dopust", startDate: "2023-09-18", endDate: "2023-09-18" },
  { id: 4, name: "Eva Horvat", type: "Bolniška", startDate: "2023-09-20", endDate: "2023-09-22" },
];

function Absences() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Odsotnosti</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Ime in Priimek</th>
            <th>Vrsta odsotnosti</th>
            <th>Datum od</th>
            <th>Datum do</th>
          </tr>
        </thead>
        <tbody>
          {mockAbsences.map((absence) => (
            <tr key={absence.id}>
              <td>{absence.name}</td>
              <td>{absence.type}</td>
              <td>{absence.startDate}</td>
              <td>{absence.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Absences;
