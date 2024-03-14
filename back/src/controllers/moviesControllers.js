const moviesServices = require("../services/moviesServices");

async function controladorMovies(req, res) {
  try {
    const movies = await moviesServices();
    res.status(200).json(movies); //status 200 es todo OK
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { controladorMovies };
