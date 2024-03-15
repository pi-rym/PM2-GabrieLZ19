const axios = require("axios");

class Movies {
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
      const { data } = await axios(
        "https://students-api.up.railway.app/movies"
      );
      const movies = data.map((movie) => new Movies(movie));
      return movies;
    } catch (error) {
      console.log(error.message);
    }
  },
};
