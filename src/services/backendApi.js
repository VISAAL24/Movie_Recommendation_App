import axios from 'axios';

// Backend API configuration
const BACKEND_BASE_URL = 'http://localhost:5000/api';

// Create axios instance for backend API
const backendApi = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
backendApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle auth errors
backendApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Token expired or invalid, clear it
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication API
export const authApi = {
  signup: async (email, password) => {
    const response = await backendApi.post('/auth/signup', { email, password });
    return response.data;
  },

  login: async (email, password) => {
    const response = await backendApi.post('/auth/login', { email, password });
    return response.data;
  },

  getProfile: async () => {
    const response = await backendApi.get('/auth/profile');
    return response.data;
  },

  verifyToken: async () => {
    const response = await backendApi.get('/auth/verify');
    return response.data;
  },
};

// Movies API
export const moviesApi = {
  getPopularMovies: async (page = 1) => {
    const response = await backendApi.get('/movies/popular', { params: { page } });
    return response.data;
  },

  searchMovies: async (query, page = 1) => {
    const response = await backendApi.get('/movies/search', { params: { query, page } });
    return response.data;
  },

  getMovieDetails: async (movieId) => {
    const response = await backendApi.get(`/movies/${movieId}`);
    return response.data;
  },

  getMovies: async (query, page = 1) => {
    const response = await backendApi.get('/movies', { params: { query, page } });
    return response.data;
  },
};

export default backendApi;
