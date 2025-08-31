// Minimal mock data to support demo mode without an API key
export const MOCK_GENRES = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 18, name: 'Drama' },
  { id: 14, name: 'Fantasy' },
  { id: 27, name: 'Horror' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
];

// A tiny set of movies for search/discover in demo mode
export const MOCK_MOVIES = [
  {
    id: 1001,
    title: 'The Demo Knight',
    overview: 'A heroic tale of a developer battling bugs in the night.',
    poster_path: '',
    release_date: '2023-07-04',
    vote_average: 8.1,
    genre_ids: [28, 18]
  },
  {
    id: 1002,
    title: 'React to the Future',
    overview: 'A time-traveling UI engineer learns the value of state.',
    poster_path: '',
    release_date: '2022-11-12',
    vote_average: 7.6,
    genre_ids: [12, 35]
  },
  {
    id: 1003,
    title: 'The Search Awakens',
    overview: 'A saga where queries shape the galaxy of results.',
    poster_path: '',
    release_date: '2021-05-19',
    vote_average: 7.9,
    genre_ids: [878, 12]
  },
  {
    id: 1004,
    title: 'Silent Types',
    overview: 'A thriller where any type error can be fatal.',
    poster_path: '',
    release_date: '2020-01-15',
    vote_average: 6.9,
    genre_ids: [9648, 53]
  }
];

