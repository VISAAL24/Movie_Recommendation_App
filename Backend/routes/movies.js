const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /api/movies - supports both popular and search
router.get('/', async (req, res) => {
  try {
    const { query, page = 1 } = req.query;
    let url;

    if (query) {
      // Search movies
      url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}`;
    } else {
      // Popular movies
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}`;
    }

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Movie API error:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

// GET /api/movies/popular
router.get('/popular', async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Popular movies error:', error);
    res.status(500).json({ error: 'Failed to fetch popular movies' });
  }
});

// GET /api/movies/search?query=batman
router.get('/search', async (req, res) => {
  try {
    const { query, page = 1 } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }
    
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Failed to search movies' });
  }
});

// GET /api/movies/:id - get movie details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Movie details error:', error);
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
});

module.exports = router;
