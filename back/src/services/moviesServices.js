const axios = require("axios");

const obtenerMovies = async () => {
  try {
    const movies = await axios("https://students-api.up.railway.app/movies");
    return movies.data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = obtenerMovies;
