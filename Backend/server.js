const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Import routes
const authRoutes = require("./routes/auth");
const movieRoutes = require("./routes/movies");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = "mongodb+srv://visaal2405_db_user:VISAAL%232424@cluster0.rl8rpst.mongodb.net/Movie_Rec?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log("Connection error:", err));

// Set TMDB API key
process.env.TMDB_API_KEY = "a3b7060f3865aa0905aa4142db2d3732";

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Movie Recommendation App Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
