const axios = require("axios");

class Movies {
  constructor(title, poster, director) {
    this.title = title;
    this.poster = poster;
    this.director = director;
    this.movies = [];
  }

  async guardarMovies() {
    const movies = await axios("https://students-api.up.railway.app/movies");
    return this.movies.push(movies);
  }
}

module.exports = {
  obtenerMovies: async () => {
    try {
      const { data } = await axios(
        "https://students-api.up.railway.app/movies"
      );
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
};
