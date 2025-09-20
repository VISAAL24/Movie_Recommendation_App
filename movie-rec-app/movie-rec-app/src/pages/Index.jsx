import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const Index = () => {
  return (
    <div className="page index">
      <section className="hero">
        <h1>Discover your next favorite movie</h1>
        <p>Search, filter by genres, and explore details powered by TMDB.</p>
        <div className="actions">
          <Link className="btn primary" to="/home">Start Exploring</Link>
          <Link className="btn" to={ROUTES.LOGIN}>Sign In</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Search</h3>
          <p>Find movies quickly with a responsive search bar.</p>
        </div>
        <div className="feature">
          <h3>Filter</h3>
          <p>Use the sidebar to filter by your favorite genres.</p>
        </div>
        <div className="feature">
          <h3>Details</h3>
          <p>Open a movie to view ratings, overview and more.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
