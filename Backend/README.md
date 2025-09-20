# Movie Recommendation App - Backend

A Node.js/Express backend for the Movie Recommendation App with MongoDB integration and TMDB API.

## Features

- User authentication (signup/login) with JWT tokens
- Movie search and popular movies from TMDB API
- MongoDB integration for user data
- Protected routes with authentication middleware
- CORS enabled for frontend integration

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env` file and update the values:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure random string for JWT signing
   - `TMDB_API_KEY`: Your TMDB API key (get from https://www.themoviedb.org/settings/api)
   - `PORT`: Server port (default: 5000)

3. **Start MongoDB:**
   - Make sure MongoDB is running on your system
   - Default connection: `mongodb://localhost:27017/movie-rec-app`

4. **Start the server:**
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `GET /api/auth/verify` - Verify JWT token (protected)

### Movies
- `GET /api/movies` - Get popular movies or search (query parameter)
- `GET /api/movies/popular` - Get popular movies
- `GET /api/movies/search?query=<search_term>` - Search movies
- `GET /api/movies/:id` - Get movie details by ID

## Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/movie-rec-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
TMDB_API_KEY=your-tmdb-api-key-here
PORT=5000
```

## Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- bcryptjs: Password hashing
- jsonwebtoken: JWT token handling
- cors: Cross-origin resource sharing
- axios: HTTP client for TMDB API
- dotenv: Environment variable management
