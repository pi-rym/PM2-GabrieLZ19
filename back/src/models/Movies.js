const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  year: Number,
  director: String,
  duration: String,
  genre: Array,
  rate: Number,
  poster: String,
});

const Movies = mongoose.model("movies", moviesSchema);

module.exports = Movies;
