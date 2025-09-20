import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function IndexNew() {
  const [autoRedirect, setAutoRedirect] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setAutoRedirect(true);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  if (autoRedirect) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <div className="welcome-icon">🎬</div>
        <h1 className="welcome-title">Welcome to MovieRec!</h1>
        <p className="welcome-message">
          Your account has been created successfully.<br />
          You will be redirected to discover amazing movies shortly.
        </p>
        <div className="welcome-actions">
          <Link to="/home" className="btn primary welcome-btn">
            Discover Movies
          </Link>
          <button
            onClick={() => setAutoRedirect(true)}
            className="btn welcome-btn-secondary"
          >
            Go Now
          </button>
        </div>
        <div className="welcome-timer">
          <div className="timer-bar">
            <div className="timer-progress"></div>
          </div>
          <span className="timer-text">Redirecting in 2 seconds...</span>
        </div>
      </div>
    </div>
  );
}
