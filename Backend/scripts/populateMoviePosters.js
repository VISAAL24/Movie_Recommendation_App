const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const axios = require('axios'); // Import axios

require('dotenv').config();

const populateMoviePosters = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');

    const movies = await Movie.find({ poster: { $exists: false } }); // Find movies without a poster field
    console.log(`Found ${movies.length} movies without posters.`);

    for (const movie of movies) {
      console.log(`Processing movie: ${movie.title}`);

      const TMDB_API_KEY = process.env.TMDB_API_KEY;
      if (!TMDB_API_KEY) {
        console.error('TMDB_API_KEY is not defined in your environment variables.');
        process.exit(1);
      }

      try {
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movie.title)}`;
        const response = await axios.get(searchUrl);
        const results = response.data.results;

        if (results && results.length > 0) {
          const tmdbMovie = results[0]; // Take the first result
          if (tmdbMovie.poster_path) {
            movie.poster = tmdbMovie.poster_path;
            await movie.save();
            console.log(`Updated poster for ${movie.title}: ${movie.poster_path}`);
          } else {
            console.log(`No poster_path found for ${movie.title} on TMDB.`);
          }
        } else {
          console.log(`No TMDB results found for movie: ${movie.title}`);
        }
      } catch (error) {
        console.error(`Error fetching poster for ${movie.title}:`, error.message);
      }
    }

    console.log('Finished populating movie posters.');
    mongoose.disconnect();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

populateMoviePosters();
