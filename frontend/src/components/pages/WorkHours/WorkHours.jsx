import React, { useState } from 'react';

const mockWorkHours = [
  { date: "2023-10-01", hoursWorked: 8, overtime: 2, notes: "Project A" },
  { date: "2023-10-02", hoursWorked: 7.5, overtime: 1.5, notes: "Client meeting" },
  { date: "2023-10-03", hoursWorked: 8, overtime: 0, notes: "Office work" },
  { date: "2023-10-04", hoursWorked: 6.5, overtime: 0, notes: "Training session" },
  { date: "2023-10-05", hoursWorked: 8, overtime: 1, notes: "Project B deadline" },
];

function WorkHours() {
  const [date, setDate] = useState("");
  const [hoursWorked, setHoursWorked] = useState("");
  const [overtime, setOvertime] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dodajanje delovnih ur:", { date, hoursWorked, overtime, notes });
    // Tukaj bi dodali funkcijo za shranjevanje podatkov, ko bo povezana z bazo.
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Opravljene ure</h2>

      {/* Pregled opravljanih ur */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Datum</th>
            <th>Število ur</th>
            <th>Nadure</th>
            <th>Zapiski</th>
            <th>Urejanje</th>
          </tr>
        </thead>
        <tbody>
          {mockWorkHours.map((workDay, index) => (
            <tr key={index}>
              <td>{workDay.date}</td>
              <td>{workDay.hoursWorked} ur</td>
              <td>{workDay.overtime} ur</td>
              <td>{workDay.notes}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">Uredi</button>
                <button className="btn btn-danger btn-sm">Izbriši</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Forma za dodajanje novih delovnih ur */}
      <h4 className="mt-4">Dodaj nove delovne ure</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Datum:</label>
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Število ur:</label>
          <input type="number" className="form-control" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Nadure:</label>
          <input type="number" className="form-control" value={overtime} onChange={(e) => setOvertime(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Zapiski:</label>
          <input type="text" className="form-control" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    </div>
  );
}

export default WorkHours;
