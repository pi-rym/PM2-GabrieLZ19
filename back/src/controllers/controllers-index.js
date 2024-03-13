function controladorMovies(req, res) {
  res
    .status(200)
    .send("próximamente estarán disponibles los datos de películas."); //status 200 es todo OK
}

module.exports = { controladorMovies };
