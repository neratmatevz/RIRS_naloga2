import React, { useState } from 'react';

const mockLeaves = [
  { type: "Vacation", startDate: "2023-08-01", endDate: "2023-08-10", notes: "Summer vacation" },
  { type: "Sick Leave", startDate: "2023-09-15", endDate: "2023-09-18", notes: "Flu" },
  { type: "Vacation", startDate: "2023-12-20", endDate: "2023-12-25", notes: "Christmas break" },
];

function LeaveAndVacation() {
  const [leaveType, setLeaveType] = useState("Vacation");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dodajanje dopusta/bolniške:", { leaveType, startDate, endDate, notes });
    // Tukaj bi dodali funkcijo za shranjevanje podatkov, ko bo povezana z bazo.
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dopust in Bolniška</h2>
      
      {/* Pregled dopustov in bolniških */}
      <table className="table table-striped mb-4">
        <thead>
          <tr>
            <th>Vrsta</th>
            <th>Datum začetka</th>
            <th>Datum konca</th>
            <th>Zapiski</th>
            <th>Urejanje</th>
          </tr>
        </thead>
        <tbody>
          {mockLeaves.map((leave, index) => (
            <tr key={index}>
              <td>{leave.type}</td>
              <td>{leave.startDate}</td>
              <td>{leave.endDate}</td>
              <td>{leave.notes}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">Uredi</button>
                <button className="btn btn-danger btn-sm">Izbriši</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Forma za dodajanje novega dopusta/bolniške */}
      <h4>Dodaj novi dopust ali bolniško</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Vrsta:</label>
          <select className="form-select" value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
            <option value="Vacation">Dopust</option>
            <option value="Sick Leave">Bolniška</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Datum začetka:</label>
          <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Datum konca:</label>
          <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
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

export default LeaveAndVacation;
