import axios from 'axios';
import { MOCK_GENRES, MOCK_MOVIES } from './mockData';

// TMDB API configuration
const API_KEY = import.meta.env.VITE_TMDB_API_KEY || '';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const DEMO_MODE = !API_KEY || import.meta.env.VITE_USE_DEMO === 'true';

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Helpers for mock/demo mode
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const paginate = (items, page = 1, perPage = 20) => {
  const start = (page - 1) * perPage;
  return {
    page,
    total_pages: Math.max(1, Math.ceil(items.length / perPage)),
    total_results: items.length,
    results: items.slice(start, start + perPage),
  };
};

// Movie API service
export const movieApi = {
  // Get popular movies
  getPopularMovies: async (page = 1) => {
    if (DEMO_MODE) {
      await delay(200);
      return paginate(MOCK_MOVIES, page);
    }
    try {
      const response = await api.get('/movie/popular', { params: { page } });
      return response.data;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error;
    }
  },

  // Get top rated movies
  getTopRatedMovies: async (page = 1) => {
    if (DEMO_MODE) {
      await delay(200);
      const copy = [...MOCK_MOVIES].sort((a, b) => b.vote_average - a.vote_average);
      return paginate(copy, page);
    }
    try {
      const response = await api.get('/movie/top_rated', { params: { page } });
      return response.data;
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
      throw error;
    }
  },

  // Get now playing movies
  getNowPlayingMovies: async (page = 1) => {
    if (DEMO_MODE) {
      await delay(200);
      return paginate(MOCK_MOVIES, page);
    }
    try {
      const response = await api.get('/movie/now_playing', { params: { page } });
      return response.data;
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
      throw error;
    }
  },

  // Get upcoming movies
  getUpcomingMovies: async (page = 1) => {
    if (DEMO_MODE) {
      await delay(200);
      return paginate(MOCK_MOVIES, page);
    }
    try {
      const response = await api.get('/movie/upcoming', { params: { page } });
      return response.data;
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
      throw error;
    }
  },

  // Search movies
  searchMovies: async (query, page = 1) => {
    if (DEMO_MODE) {
      await delay(200);
      const q = (query || '').toLowerCase();
      const filtered = MOCK_MOVIES.filter(m => m.title.toLowerCase().includes(q));
      return paginate(filtered, page);
    }
    try {
      const response = await api.get('/search/movie', { params: { query, page } });
      return response.data;
    } catch (error) {
      console.error('Error searching movies:', error);
      throw error;
    }
  },

  // Get movie details
  getMovieDetails: async (movieId) => {
    if (DEMO_MODE) {
      await delay(150);
      const m = MOCK_MOVIES.find(x => String(x.id) === String(movieId));
      if (!m) throw new Error('Movie not found');
      return { ...m, credits: { cast: [] }, videos: { results: [] }, similar: { results: MOCK_MOVIES }, reviews: { results: [] } };
    }
    try {
      const response = await api.get(`/movie/${movieId}`, { params: { append_to_response: 'credits,videos,similar,reviews' } });
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  },

  // Get movie genres
  getGenres: async () => {
    if (DEMO_MODE) {
      await delay(100);
      return MOCK_GENRES;
    }
    try {
      const response = await api.get('/genre/movie/list');
      return response.data.genres;
    } catch (error) {
      console.error('Error fetching genres:', error);
      throw error;
    }
  },

  // Discover movies with filters
  discoverMovies: async (filters = {}, page = 1) => {
    if (DEMO_MODE) {
      await delay(200);
      let list = [...MOCK_MOVIES];
      if (filters.with_genres) {
        const ids = new Set(String(filters.with_genres).split(',').filter(Boolean));
        list = list.filter(m => m.genre_ids.some(id => ids.has(String(id))));
      }
      return paginate(list, page);
    }
    try {
      const response = await api.get('/discover/movie', { params: { page, ...filters } });
      return response.data;
    } catch (error) {
      console.error('Error discovering movies:', error);
      throw error;
    }
  },

  // Get movie recommendations
  getMovieRecommendations: async (movieId, page = 1) => {
    if (DEMO_MODE) {
      await delay(150);
      return paginate(MOCK_MOVIES.filter(m => String(m.id) !== String(movieId)), page);
    }
    try {
      const response = await api.get(`/movie/${movieId}/recommendations`, { params: { page } });
      return response.data;
    } catch (error) {
      console.error('Error fetching movie recommendations:', error);
      throw error;
    }
  },

  // Get similar movies
  getSimilarMovies: async (movieId, page = 1) => {
    if (DEMO_MODE) {
      await delay(150);
      return paginate(MOCK_MOVIES.filter(m => String(m.id) !== String(movieId)), page);
    }
    try {
      const response = await api.get(`/movie/${movieId}/similar`, { params: { page } });
      return response.data;
    } catch (error) {
      console.error('Error fetching similar movies:', error);
      throw error;
    }
  }
};

// Image URL helpers
export const getImageUrl = (path, size = 'w500') => {
  if (!path) return '/placeholder-movie.jpg';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getBackdropUrl = (path, size = 'w1280') => {
  if (!path) return '/placeholder-backdrop.jpg';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

// Configuration for image sizes
export const IMAGE_SIZES = {
  poster: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  backdrop: ['w300', 'w780', 'w1280', 'original'],
  profile: ['w45', 'w185', 'h632', 'original']
};

export default movieApi;
