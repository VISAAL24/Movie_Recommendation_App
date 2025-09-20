import React, { createContext, useContext, useState, useEffect } from 'react';
import { STORAGE_KEYS, SUCCESS_MESSAGES, ERROR_MESSAGES } from '../utils/constants';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Load user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem(STORAGE_KEYS.USER);
      }
    }
    setLoading(false);
  }, []);

  // Save user to localStorage whenever user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  }, [user]);

  const login = async (email, password) => {
    setLoading(true);
    setError('');

    try {
      // Simulate API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));

      // For demo purposes, accept any email/password combination
      // In a real app, you would validate against a backend
      if (email && password) {
        const userData = {
          id: Date.now(),
          email,
          name: email.split('@')[0],
          avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`,
          createdAt: new Date().toISOString()
        };

        setUser(userData);
        setError('');
        return { success: true, message: SUCCESS_MESSAGES.LOGIN_SUCCESS };
      } else {
        throw new Error(ERROR_MESSAGES.LOGIN_ERROR);
      }
    } catch (error) {
      const errorMessage = error.message || ERROR_MESSAGES.LOGIN_ERROR;
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name, email, password) => {
    setLoading(true);
    setError('');

    try {
      // Simulate API call - replace with actual registration
      await new Promise(resolve => setTimeout(resolve, 1000));

      // For demo purposes, accept any valid input
      // In a real app, you would validate against a backend
      if (name && email && password) {
        const userData = {
          id: Date.now(),
          email,
          name,
          avatar: `https://ui-avatars.com/api/?name=${name}&background=random`,
          createdAt: new Date().toISOString()
        };

        setUser(userData);
        setError('');
        return { success: true, message: SUCCESS_MESSAGES.SIGNUP_SUCCESS };
      } else {
        throw new Error(ERROR_MESSAGES.SIGNUP_ERROR);
      }
    } catch (error) {
      const errorMessage = error.message || ERROR_MESSAGES.SIGNUP_ERROR;
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setError('');
    // Clear user-related data from localStorage
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.FAVORITES);
    localStorage.removeItem(STORAGE_KEYS.WATCHLIST);
    return { success: true, message: SUCCESS_MESSAGES.LOGOUT_SUCCESS };
  };

  const clearError = () => {
    setError('');
  };

  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
    clearError,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
