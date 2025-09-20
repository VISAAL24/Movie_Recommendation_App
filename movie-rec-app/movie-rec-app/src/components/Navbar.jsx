import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      {/* updated link to avoid static home.html collision */}
      <Link to="/discover">Discover Movies</Link>
    </nav>
  );
}
