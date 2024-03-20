const axios = require("axios");
const movies = require("../models/Movies");

class pelis {
  constructor({ title, year, director, duration, genre, rate, poster }) {
    if (!title || !poster || !director) {
      throw new Error("Propiedades requeridas no encontradas");
    }
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

module.exports = {
  obtenerMovies: async () => {
    try {
      const peliculas = await movies.find();
      const moviesMap = peliculas.map((movie) => new pelis(movie));

      return moviesMap;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
