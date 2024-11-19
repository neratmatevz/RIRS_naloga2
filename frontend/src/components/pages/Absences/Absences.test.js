// Absences.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Absences from './Absences'; // Adjust the import if necessary

describe('Absences Component', () => {
  it('should render the table with correct headers', () => {
    render(<Absences />);

    // Check if the table headers are rendered correctly
    expect(screen.getByText(/Ime in Priimek/i)).toBeInTheDocument();
    expect(screen.getByText(/Vrsta odsotnosti/i)).toBeInTheDocument();
    expect(screen.getByText(/Datum od/i)).toBeInTheDocument();
    expect(screen.getByText(/Datum do/i)).toBeInTheDocument();
  });

  it('should display the absence data in the table', () => {
    render(<Absences />);
     
    // Use getAllByText to check for multiple instances of "Bolniška"
    const absenceTypes = screen.getAllByText(/Bolniška/i);
    expect(absenceTypes.length).toBe(2); // Expect two "Bolniška" entries
  });
});