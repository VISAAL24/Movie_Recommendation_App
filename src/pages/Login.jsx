import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ERROR_MESSAGES, ROUTES } from '../utils/constants';

const Login = () => {
  const navigate = useNavigate();
  const { login, error, clearError } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [redirectToIndexNew, setRedirectToIndexNew] = useState(false);

  const validate = () => {
    if (!email || !password) {
      return ERROR_MESSAGES.REQUIRED_FIELD;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return ERROR_MESSAGES.INVALID_EMAIL;
    }
    if (password.length < 6) {
      return ERROR_MESSAGES.PASSWORD_TOO_SHORT;
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    const errorMsg = validate();
    if (errorMsg) {
      setFormError(errorMsg);
      return;
    }

    setSubmitting(true);
    const result = await login(email, password);
    setSubmitting(false);

    if (result.success) {
      setRedirectToIndexNew(true); // redirect to new index page
    } else {
      setFormError(result.message || 'Login failed');
    }
  };

  if (redirectToIndexNew) {
    return <Navigate to="/index-new" replace />;
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        {(formError || error) && (
          <div className="error-message" onClick={() => clearError()}>
            {formError || error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="btn primary" disabled={submitting}>
            {submitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{' '}
          <Link to={ROUTES.SIGNUP}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
