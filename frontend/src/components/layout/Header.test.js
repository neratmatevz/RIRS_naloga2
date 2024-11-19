// Header.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom'; // to wrap the component in Router for navigation
import { auth } from '../../firebase';

// Mocking auth.signOut function to prevent actual logout
jest.mock('../../firebase', () => ({
  auth: {
    signOut: jest.fn(),
  },
}));

describe('Header Component', () => {
  const mockSetRole = jest.fn();
  const mockSetIsAuthenticated = jest.fn();

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test to avoid any residual effect
  });

  it('should render the correct links for admin role', () => {
    // Render Header with admin role
    render(
      <Router>
        <Header role="admin" setRole={mockSetRole} setIsAuthenticated={mockSetIsAuthenticated} />
      </Router>
    );

    // Check if "Nadzorna plošča" link is rendered for admin
    expect(screen.getByText(/Nadzorna plošča/i)).toBeInTheDocument();
    // Check if "Moje ure" link is rendered
    expect(screen.getByText(/Moje ure/i)).toBeInTheDocument();
    // Check if "Moji dopusti/bolniške" link is rendered
    expect(screen.getByText(/Moji dopusti\/bolniške/i)).toBeInTheDocument();
    // Check if "Odjava" button is rendered
    expect(screen.getByText(/Odjava/i)).toBeInTheDocument();
  });

  it('should render the correct links for non-admin role', () => {
    // Render Header with non-admin role
    render(
      <Router>
        <Header role="user" setRole={mockSetRole} setIsAuthenticated={mockSetIsAuthenticated} />
      </Router>
    );

    // Check if "Nadzorna plošča" link is NOT rendered
    expect(screen.queryByText(/Nadzorna plošča/i)).not.toBeInTheDocument();
    // Check if "Moje ure" link is rendered
    expect(screen.getByText(/Moje ure/i)).toBeInTheDocument();
    // Check if "Moji dopusti/bolniške" link is rendered
    expect(screen.getByText(/Moji dopusti\/bolniške/i)).toBeInTheDocument();
    // Check if "Odjava" button is rendered
    expect(screen.getByText(/Odjava/i)).toBeInTheDocument();
  });

  it('should call logout functions when logout button is clicked', () => {
    render(
      <Router>
        <Header role="admin" setRole={mockSetRole} setIsAuthenticated={mockSetIsAuthenticated} />
      </Router>
    );

    const logoutButton = screen.getByText(/Odjava/i);

    fireEvent.click(logoutButton);

    // Check if signOut function was called
    expect(auth.signOut).toHaveBeenCalledTimes(1);
    // Check if setRole function was called with null
    expect(mockSetRole).toHaveBeenCalledWith(null);
    // Check if setIsAuthenticated function was called with false
    expect(mockSetIsAuthenticated).toHaveBeenCalledWith(false);
  });
});