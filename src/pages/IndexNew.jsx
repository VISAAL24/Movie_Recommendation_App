import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function IndexNew() {
  const [autoRedirect, setAutoRedirect] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setAutoRedirect(true); // toggle flag instead of calling navigate()
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  if (autoRedirect) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4f8cff 0%, #22283a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: '#fff',
        color: '#22283a',
        padding: '3rem 2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        <h1 style={{ marginBottom: '1rem' }}>Welcome to Movie Recommendation App!</h1>
        <p style={{ marginBottom: '2rem' }}>
          Your account has been created.<br />
          You will be redirected to Discover movies shortly.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link
            to="/home"
            style={{
              display: 'inline-block',
              background: '#4f8cff',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            Discover Movies
          </Link>
          <button
            onClick={() => setAutoRedirect(true)}
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: '#4f8cff',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid #4f8cff',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Go Now
          </button>
        </div>
      </div>
    </div>
  );
}
