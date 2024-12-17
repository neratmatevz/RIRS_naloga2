import React, { createContext, useContext, useState } from 'react';

// Create a context for Auth
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component that will provide the auth state to your app
// Zelo pomemben dodatek
export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);  // Store userId globally

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};