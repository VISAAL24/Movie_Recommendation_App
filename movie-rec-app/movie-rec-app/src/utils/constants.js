// API Configuration
export const API_CONFIG = {
  // Replace with your actual TMDB API key
  // Get your free API key from: https://www.themoviedb.org/settings/api
  TMDB_API_KEY: 'your_api_key_here',
  TMDB_BASE_URL: 'https://api.themoviedb.org/3',
  TMDB_IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
};

// Movie categories for navigation
export const MOVIE_CATEGORIES = {
  POPULAR: 'popular',
  TOP_RATED: 'top_rated',
  NOW_PLAYING: 'now_playing',
  UPCOMING: 'upcoming'
};

// Filter options
export const SORT_OPTIONS = [
  { value: 'popularity.desc', label: 'Most Popular' },
  { value: 'popularity.asc', label: 'Least Popular' },
  { value: 'vote_average.desc', label: 'Highest Rated' },
  { value: 'vote_average.asc', label: 'Lowest Rated' },
  { value: 'release_date.desc', label: 'Newest' },
  { value: 'release_date.asc', label: 'Oldest' },
  { value: 'title.asc', label: 'A-Z' },
  { value: 'title.desc', label: 'Z-A' }
];

export const YEAR_RANGE = {
  MIN: 1900,
  MAX: new Date().getFullYear() + 2
};

export const RATING_RANGE = {
  MIN: 0,
  MAX: 10
};

// Common genres (will be fetched from API but these are fallbacks)
export const COMMON_GENRES = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' }
];

// App routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DISCOVER: '/discover',
  SEARCH: '/search',
  MOVIE_DETAILS: '/movie/:id',
  CATEGORY: '/category/:category'
};

// Pagination
export const PAGINATION = {
  ITEMS_PER_PAGE: 20,
  MAX_PAGES: 500 // TMDB limit
};

// Local storage keys
export const STORAGE_KEYS = {
  USER: 'movie_user',
  FAVORITES: 'movie_favorites',
  WATCHLIST: 'movie_watchlist',
  RECENT_SEARCHES: 'recent_searches',
  USER_PREFERENCES: 'user_preferences'
};

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your internet connection.',
  API_ERROR: 'Unable to fetch data. Please try again later.',
  NOT_FOUND: 'Movie not found.',
  SEARCH_ERROR: 'Search failed. Please try again.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
  REQUIRED_FIELD: 'This field is required.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  PASSWORD_TOO_SHORT: 'Password must be at least 6 characters long.',
  LOGIN_ERROR: 'Login failed. Please check your credentials.',
  SIGNUP_ERROR: 'Signup failed. Please try again.'
};

// Success messages
export const SUCCESS_MESSAGES = {
  ADDED_TO_FAVORITES: 'Added to favorites!',
  REMOVED_FROM_FAVORITES: 'Removed from favorites!',
  ADDED_TO_WATCHLIST: 'Added to watchlist!',
  REMOVED_FROM_WATCHLIST: 'Removed from watchlist!',
  LOGIN_SUCCESS: 'Login successful! Welcome back.',
  SIGNUP_SUCCESS: 'Account created successfully! Welcome to MovieRec.',
  LOGOUT_SUCCESS: 'Logged out successfully.'
};

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  MOBILE: '480px',
  TABLET: '768px',
  DESKTOP: '1024px',
  LARGE_DESKTOP: '1200px'
};

export default {
  API_CONFIG,
  MOVIE_CATEGORIES,
  SORT_OPTIONS,
  YEAR_RANGE,
  RATING_RANGE,
  COMMON_GENRES,
  ROUTES,
  PAGINATION,
  STORAGE_KEYS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  ANIMATION_DURATION,
  BREAKPOINTS
};
