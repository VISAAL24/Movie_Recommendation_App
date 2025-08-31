import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movieApi, getImageUrl } from '../services/movieApi';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const withGenres = searchParams.get('with_genres') || '';
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError('');
      try {
        let data;
        if (query) {
          data = await movieApi.searchMovies(query);
        } else {
          const filters = {};
          if (withGenres) filters.with_genres = withGenres;
          data = await movieApi.discoverMovies(filters);
        }
        setMovies(data.results || []);
      } catch (err) {
        setError('Failed to load movies');
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [withGenres, query]);

  return (
    <div className="home">
      <SearchBar />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="grid">
        {movies.map((m) => (
          <div className="card movie-card" key={m.id}>
            <img src={getImageUrl(m.poster_path)} alt={m.title} />
            <div className="info">
              <h4>{m.title}</h4>
              <p>{m.release_date?.slice(0,4)} • ⭐ {m.vote_average?.toFixed(1)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
