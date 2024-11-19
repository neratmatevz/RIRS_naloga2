import { render, screen, fireEvent } from '@testing-library/react';
import EditPopup from './EditPopup';

test('should display the correct initial values in the popup fields', () => {
  const mockWorkDay = {
    date: '2023-11-19',
    hours: 8,
    overtime: 2
  };

  render(<EditPopup workDay={mockWorkDay} onClose={jest.fn()} onSave={jest.fn()} />);

  // Check if the correct initial values are rendered in the fields
  expect(screen.getByLabelText(/Date:/i).value).toBe('2023-11-19');
  expect(screen.getByLabelText(/Hours Worked:/i).value).toBe('8');
  expect(screen.getByLabelText(/Overtime:/i).value).toBe('2');
});

test('should call onSave when Save button is clicked and onClose when Cancel button is clicked', () => {
  const mockSave = jest.fn();
  const mockClose = jest.fn();
  const mockWorkDay = {
    date: '2023-11-19',
    hours: 8,
    overtime: 2
  };

  render(<EditPopup workDay={mockWorkDay} onClose={mockClose} onSave={mockSave} />);

  // Simulate user interaction
  fireEvent.click(screen.getByText(/Save/i));

  // Check if the onSave function is called
  expect(mockSave).toHaveBeenCalledWith({
    date: '2023-11-19',
    hours: 8,
    overtime: 2
  });

  // Check if the onClose function is called
  expect(mockClose).toHaveBeenCalled();

  // Simulate Cancel button click
  fireEvent.click(screen.getByText(/Cancel/i));

  // Check if the onClose function is called
  expect(mockClose).toHaveBeenCalledTimes(2);
});