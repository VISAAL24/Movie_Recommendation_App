const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fetch = require("node-fetch"); // If using Node <18, else built-in fetch works

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Movie Recommendation App Backend is running!");
});

// Movies route: supports popular and search
app.get("/api/movies", async (req, res) => {
  try {
    const { query, page = 1 } = req.query;
    let url;

    if (query) {
      // Search movies
      url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}`;
    } else {
      // Popular movies
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
