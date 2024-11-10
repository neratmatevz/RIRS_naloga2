import React, { useState } from 'react';
import './EditPopup.css';

const EditPopup = ({ workDay, onClose, onSave }) => {
  const [date, setDate] = useState(workDay.date);
  const [hoursWorked, setHoursWorked] = useState(workDay.hours);
  const [overtime, setOvertime] = useState(workDay.overtime);

  const handleSave = () => {
    onSave({
      date: date,
      hours: hoursWorked,
      overtime: overtime
    });
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h4>Edit Work Hours</h4>
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hours Worked:</label>
          <input
            type="number"
            className="form-control"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Overtime:</label>
          <input
            type="number"
            className="form-control"
            value={overtime}
            onChange={(e) => setOvertime(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-secondary ms-2" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditPopup;