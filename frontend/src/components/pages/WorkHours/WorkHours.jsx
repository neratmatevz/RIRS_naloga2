import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/Context';

const mockWorkHours = [
  { date: "2023-10-01", hoursWorked: 8, overtime: 2 },
  { date: "2023-10-02", hoursWorked: 7.5, overtime: 1.5 },
  { date: "2023-10-03", hoursWorked: 8, overtime: 0 },
  { date: "2023-10-04", hoursWorked: 6.5, overtime: 0 },
  { date: "2023-10-05", hoursWorked: 8, overtime: 1 },
];

function WorkHours() {
  const { userId } = useAuth();

  const [date, setDate] = useState("");
  const [hoursWorked, setHoursWorked] = useState(0);
  const [overtime, setOvertime] = useState(0);
  const [workHours, setWorkHours] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:3001/api/workHours?userId=${userId}`)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const formattedWorkHours = data.workHours.map((entry) => {
          // Convert the timestamp to a Date object
          const date = new Date(entry.date._seconds * 1000 + entry.date._nanoseconds / 1000000);
          return {
            ...entry,
            date: date.toLocaleDateString(), // Format date as a readable string
          };
        });
        setWorkHours(formattedWorkHours);
      })
      .catch((error) => {
        console.error('Error fetching sick leave data:', error);
      });
  }, [userId])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHours = {
      date: date,
      hours: hoursWorked,
      overtime: overtime
    };


    fetch(`http://localhost:3001/api/workHours?userId=${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHours),
    })
      .then((response) => response.json())
      .then((data) => {
        const formattedWorkHours = data.workHours.map((entry) => {
          // Convert the timestamp to a Date object
          const date = new Date(entry.date._seconds * 1000 + entry.date._nanoseconds / 1000000);
          return {
            ...entry,
            date: date.toLocaleDateString(), // Format date as a readable string
          };
        });
        setWorkHours(formattedWorkHours);
      })
      .catch((error) => {
        console.error('Error adding new sick leave:', error);
      });
      
      setDate("");
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
            <th>Urejanje</th>
          </tr>
        </thead>
        <tbody>
          {workHours.map((workDay, index) => (
            <tr key={index}>
              <td>{workDay.date}</td>
              <td>{workDay.hours}</td>
              <td>{workDay.overtime}</td>
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
        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    </div>
  );
}

export default WorkHours;
