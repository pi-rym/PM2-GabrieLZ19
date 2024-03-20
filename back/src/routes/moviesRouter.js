const { Router } = require("express");
const {
  controladorMovies,
  postearMovies,
} = require("../controllers/moviesControllers");

const moviesRoute = Router();

moviesRoute.get("/", controladorMovies);
moviesRoute.post("/", postearMovies);

module.exports = moviesRoute;
