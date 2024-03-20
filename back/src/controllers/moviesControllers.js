const { obtenerMovies, postMovies } = require("../services/moviesServices");

async function controladorMovies(req, res) {
  try {
    const movies = await obtenerMovies();
    res.status(200).json(movies); //status 200 es todo OK
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function postearMovies(req, res) {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const guardarMovie = await postMovies({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });

    res.status(201).json(guardarMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = { controladorMovies, postearMovies };
