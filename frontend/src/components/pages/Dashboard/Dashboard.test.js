import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard'; // Adjust the import if the path is different

describe('Dashboard Component', () => {
  
  describe('Employee Data', () => {
    it('should render employee name correctly', () => {
      render(<Dashboard />);
      // Check if employee names are rendered correctly
      expect(screen.getByText('Eva Horvat')).toBeInTheDocument();
    });

    it('should render total hours and overtime correctly', () => {
      render(<Dashboard />);
      // Check if total hours and overtime for employee are displayed correctly
      expect(screen.getByText('140 ur')).toBeInTheDocument();
      expect(screen.getByText('5 ur')).toBeInTheDocument();
    });
  });

  describe('Leave Data', () => {
    it('should render leave type correctly', () => {
      render(<Dashboard />);
      // Check if leave data is rendered correctly
      expect(screen.getByText('Sick Leave')).toBeInTheDocument();
      expect(screen.getByText('Vacation')).toBeInTheDocument();
    });

    it('should render leave details (employee, dates) correctly', () => {
      render(<Dashboard />);
      // Check if leave details (employee, type, start and end dates) are displayed
      expect(screen.getByText('Janez Novak')).toBeInTheDocument();
      expect(screen.getByText('2023-09-10')).toBeInTheDocument();
      expect(screen.getByText('2023-09-15')).toBeInTheDocument();

      expect(screen.getByText('Ana Kovač')).toBeInTheDocument();
      expect(screen.getByText('2023-10-01')).toBeInTheDocument();
      expect(screen.getByText('2023-10-07')).toBeInTheDocument();
    });
  });

});
