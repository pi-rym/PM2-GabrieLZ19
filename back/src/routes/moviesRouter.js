const { Router } = require("express");
const { controladorMovies } = require("../controllers/moviesControllers");

const moviesRoute = Router();

moviesRoute.get("/", controladorMovies);

module.exports = moviesRoute;
