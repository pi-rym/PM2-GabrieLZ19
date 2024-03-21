const { Router } = require("express");
const {
  controladorMovies,
  postearMovies,
} = require("../controllers/moviesControllers");
const validarMovie = require("../middlewares/validarPeliculas");

const moviesRoute = Router();

moviesRoute.get("/", controladorMovies);
moviesRoute.post("/", validarMovie, postearMovies);

module.exports = moviesRoute;
