const { Router } = require("express");
const { controladorMovies } = require("../controllers/moviesControllers");

const router = Router();

router.get("/movies", controladorMovies);

module.exports = router;
