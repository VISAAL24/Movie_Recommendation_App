import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movieApi, getImageUrl } from '../services/movieApi';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState(null);

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

  const SAMPLE_MOVIES = [
    {
      id: 1,
      title: 'Inception',
      year: 2010,
      genres: ['Sci-Fi', 'Thriller'],
      overview: 'A thief who steals corporate secrets through use of dream-sharing technology...',
      poster: 'https://via.placeholder.com/300x450?text=Inception'
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      year: 1994,
      genres: ['Drama'],
      overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption...',
      poster: 'https://via.placeholder.com/300x450?text=Shawshank'
    },
    // ...add more movies as needed...
  ];

  return (
    <div className="home">
      <SearchBar />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="grid">
        {movies.map((m) => (
          <div className="card movie-card" key={m.id} onClick={() => setSelected(m)}>
            <img src={getImageUrl(m.poster_path)} alt={m.title} />
            <div className="info">
              <h4>{m.title}</h4>
              <p>{m.release_date?.slice(0,4)} • ⭐ {m.vote_average?.toFixed(1)}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="modal"
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div
            className="modal-content"
            onClick={e => e.stopPropagation()}
            style={{
              background: '#fff',
              color: '#111',
              padding: 20,
              borderRadius: 8,
              maxWidth: 760,
              width: '90%',
              display: 'flex',
              gap: 16
            }}
          >
            <img src={selected.poster} alt={selected.title} style={{ width: 200, borderRadius: 6 }} />
            <div>
              <h2 style={{ marginTop: 0 }}>{selected.title} <small style={{ color: '#777' }}>({selected.year})</small></h2>
              <p style={{ color: '#666' }}><strong>Genres:</strong> {selected.genres.join(', ')}</p>
              <p style={{ lineHeight: 1.5 }}>{selected.overview}</p>
              <div style={{ marginTop: 12 }}>
                <button onClick={() => setSelected(null)} style={{ padding: '8px 12px', borderRadius: 6, cursor: 'pointer' }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
