import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { movieApi } from '../services/movieApi';

const GenreSidebar = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedGenres = searchParams.get('with_genres')?.split(',').filter(Boolean) || [];

  useEffect(() => {
    const fetchGenres = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await movieApi.getGenres();
        setGenres(data);
      } catch (err) {
        setError('Failed to load genres');
      } finally {
        setLoading(false);
      }
    };
    fetchGenres();
  }, []);

  const toggleGenre = (id) => {
    const current = new Set(selectedGenres);
    if (current.has(String(id))) current.delete(String(id));
    else current.add(String(id));

    const next = Array.from(current).join(',');
    const params = new URLSearchParams(searchParams);
    if (next) params.set('with_genres', next);
    else params.delete('with_genres');
    params.delete('page'); // reset pagination
    setSearchParams(params);
  };

  return (
    <div className="genre-sidebar">
      <h3>Genres</h3>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul>
        {genres.map((g) => (
          <li key={g.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedGenres.includes(String(g.id))}
                onChange={() => toggleGenre(g.id)}
              />
              <span>{g.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreSidebar;
