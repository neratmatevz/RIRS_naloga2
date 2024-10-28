import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/layout/Header';
import Dashboard from './components/pages/Dashboard/Dashboard';
import WorkHours from './components/pages/WorkHours/WorkHours';
import Absences from './components/pages/Absences/Absences';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workhours" element={<WorkHours />} />
            <Route path="/absences" element={<Absences />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
