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
  { id: 53, name: 'Thriller' },
  { id: 10751, name: 'Family' },
  { id: 36, name: 'History' },
  { id: 10402, name: 'Music' },
  { id: 10770, name: 'TV Movie' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
  { id: 99, name: 'Documentary' }
];

// 20 movies for search/discover in demo mode
export const MOCK_MOVIES = [
  {
    id: 1001,
    title: 'The Demon Knight',
    overview: 'A heroic tale of a developer battling bugs in the night.',
    poster_path: 'https://images.unsplash.com/photo-1542435503-912f293f773b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHx0aGUlMjBkZW1vbiUyMGtuaWdodHxlbnwwfHx8fDE2OTYzMzk1NDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2023-07-04',
    vote_average: 8.1,
    genre_ids: [28, 18]
  },
  {
    id: 1002,
    title: 'React to the Future',
    overview: 'A time-traveling UI engineer learns the value of state.',
    poster_path: 'https://images.unsplash.com/photo-1518066000714-53f23c15523e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHRvJTIwdGhlJTIwZnV0dXJlfGVufDB8fHx8MTY5NjMzOTU0OXww&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2022-11-12',
    vote_average: 7.6,
    genre_ids: [12, 35]
  },
  {
    id: 1003,
    title: 'The Search Awakens',
    overview: 'A saga where queries shape the galaxy of results.',
    poster_path: 'https://images.unsplash.com/photo-1524334336214-41d34c11818d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHx0aGUlMjBzZWFyY2glMjBhd2FrZW5zfGVufDB8fHx8MTY5NjMzOTU0OXww&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2021-05-19',
    vote_average: 7.9,
    genre_ids: [878, 12]
  },
  {
    id: 1004,
    title: 'Silent Types',
    overview: 'A thriller where any type error can be fatal.',
    poster_path: 'https://images.unsplash.com/photo-1574378954751-60a6e0b3c292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzaWxlbnQlMjB0eXBlc3xlbnwwfHx8fDE2OTYzMzk1NDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2020-01-15',
    vote_average: 6.9,
    genre_ids: [9648, 53]
  },
  {
    id: 1005,
    title: 'The Matrix: Code Reloaded',
    overview: 'Neo discovers the true nature of JavaScript frameworks.',
    poster_path: 'https://images.unsplash.com/photo-1550220671-8b1b229f3d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHx0aGUlMjBtYXRyaXglMjBjb2RlJTIwcmVsb2FkZWR8ZW58MHx8fHwxNjk2MzM5NTQ5fDA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2023-03-22',
    vote_average: 8.3,
    genre_ids: [878, 28]
  },
  {
    id: 1006,
    title: 'Git Wars: The Clone Wars',
    overview: 'A space opera about version control and branching strategies.',
    poster_path: 'https://images.unsplash.com/photo-1579543787723-5e75c65f013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxnaXQlMjB3YXJzJTIwdGhlJTIwY2xvbmUlMjB3YXJzfGVufDB8fHx8MTY5NjMzOTU0OXww&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2022-09-08',
    vote_average: 7.4,
    genre_ids: [878, 12]
  },
  {
    id: 1007,
    title: 'The Debugger',
    overview: 'A detective story about finding the perfect bug.',
    poster_path: 'https://images.unsplash.com/photo-1563812239304-48286f0c4558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHx0aGUlMjBkZWJ1Z2dlcnxlbnwwfHx8fDE2OTYzMzk1NDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2023-01-30',
    vote_average: 6.8,
    genre_ids: [9648, 53]
  },
  {
    id: 1008,
    title: 'API: The Last Request',
    overview: 'The final battle between REST and GraphQL.',
    poster_path: 'https://images.unsplash.com/photo-1598918231920-5c66d21391d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxBUkl8ZW58MHx8fHwxNjk2MzM5NTQ5fDA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2022-12-14',
    vote_average: 7.7,
    genre_ids: [878, 28]
  },
  {
    id: 1009,
    title: 'The Terminal',
    overview: 'A programmer\'s journey through command line interfaces.',
    poster_path: 'https://images.unsplash.com/photo-1510519195971-6c7b94b05a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHx0aGUlMjB0ZXJtaW5hbHxlbnwwfHx8fDE2OTYzMzk1NDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2023-04-11',
    vote_average: 7.2,
    genre_ids: [18, 35]
  },
  {
    id: 1010,
    title: 'Database Confidential',
    overview: 'A noir thriller about corrupted data and lost transactions.',
    poster_path: 'https://images.unsplash.com/photo-1517457375-be14a1f6a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxEYXRhYmFzZSUyMENvbmZpZGVudGlhbHxlbnwwfHx8fDE2OTYzMzk1NDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2022-06-25',
    vote_average: 6.5,
    genre_ids: [80, 53]
  },
  {
    id: 1011,
    title: 'The Cloud Chronicles',
    overview: 'Epic tales from the serverless frontier.',
    poster_path: 'https://images.unsplash.com/photo-1522068205423-a61253457199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxUaGUlMjBDbG91ZCUyMENocm9uaWNsZXMlN0VlbnwwfHx8fDE2OTYzMzk1NDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2023-02-18',
    vote_average: 8.0,
    genre_ids: [878, 12]
  },
  {
    id: 1012,
    title: 'CSS: The Force Awakens',
    overview: 'A young developer discovers the power of flexbox.',
    poster_path: 'https://images.unsplash.com/photo-1549692520-acc6669e2365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxDU1MlMjB0aGUlMjBmb3JjZSUyMGF3YWtlbnN8ZW58MHx8fHwxNjk2MzM5NTQ5fDA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2022-08-03',
    vote_average: 7.1,
    genre_ids: [16, 35]
  },
  {
    id: 1013,
    title: 'The Algorithm',
    overview: 'A mathematical thriller about sorting and searching.',
    poster_path: 'https://images.unsplash.com/photo-1541880461-f4040989b52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxUaGUlMjBBbGdvcml0aG18ZW58MHx8fHwxNjk2MzM5NTQ5fDA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2023-05-29',
    vote_average: 7.8,
    genre_ids: [9648, 53]
  },
  {
    id: 1014,
    title: 'Deployment Day',
    overview: 'The story of a team\'s race against time to go live.',
    poster_path: 'https://images.unsplash.com/photo-1522204683525-24d1421008d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxEZXBsb3ltZW50JTIwRGF5fGVufDB8fHx8MTY5NjMzOTU0OXww&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2022-10-17',
    vote_average: 6.7,
    genre_ids: [18, 28]
  },
  {
    id: 1015,
    title: 'The Stack Overflow',
    overview: 'A comedy about programmers helping each other online.',
    poster_path: 'https://images.unsplash.com/photo-1549681329-87c2b622c733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxUaGUlMjBTdGFjayUyME92ZXJmbG93fGVufDB8fHx8MTY5NjMzOTU0OXww&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2023-06-12',
    vote_average: 7.5,
    genre_ids: [35, 18]
  },
  {
    id: 1016,
    title: 'The Refactor',
    overview: 'A horror story about legacy code that refuses to die.',
    poster_path: 'https://images.unsplash.com/photo-1510912196144-8c86d52575f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxUaGUlMjBSZWZhY3RvcnxlbnwwfHx8fDE2OTYzMzk1NDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2022-07-21',
    vote_average: 6.3,
    genre_ids: [27, 9648]
  },
  {
    id: 1017,
    title: 'The Pull Request',
    overview: 'A romantic comedy about code reviews and collaboration.',
    poster_path: 'https://images.unsplash.com/photo-1582218413151-e1a3d9b4b0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxUaGUlMjBQdWxsJTIwUmVxdWVzdHxlbnwwfHx8fDE2OTYzMzk1NDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2023-08-05',
    vote_average: 7.3,
    genre_ids: [10749, 35]
  },
  {
    id: 1018,
    title: 'The Cache',
    overview: 'A mystery about disappearing data and memory leaks.',
    poster_path: 'https://images.unsplash.com/photo-1521747116042-536347264a75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxUaGUlMjBDYWNoZXxlbnwwfHx8fDE2OTYzMzk1NDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2022-11-30',
    vote_average: 6.9,
    genre_ids: [9648, 53]
  },
  {
    id: 1019,
    title: 'The Framework',
    overview: 'An adventure through the world of modern web development.',
    poster_path: 'https://images.unsplash.com/photo-1549048092-23c21c7a840e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxUaGUlMjBGcmFtZXdvcmt8ZW58MHx8fHwxNjk2MzM5NTQ5fDA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2023-01-08',
    vote_average: 8.2,
    genre_ids: [12, 878]
  },
  {
    id: 1020,
    title: 'The Compiler',
    overview: 'A sci-fi tale about machines that understand human code.',
    poster_path: 'https://images.unsplash.com/photo-1549419163-10023a8e9766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxUaGUlMjBDb21waWxlcnxlbnwwfHx8fDE2OTYzMzk1NDl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    release_date: '2022-12-25',
    vote_average: 7.6,
    genre_ids: [878, 18]
  }
];

