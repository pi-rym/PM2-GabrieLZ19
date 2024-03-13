const { Router } = require("express");
const { controladorMovies } = require("../controllers/moviesControllers");

const moviesRoute = Router();
console.log("si pase por aqui");
moviesRoute.get("/", controladorMovies);

module.exports = moviesRoute;
