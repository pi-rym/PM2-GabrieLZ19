const { Router } = require("express");
const { controladorMovies } = require("../controllers/controllers-index");

const router = Router();

router.get("/movies", controladorMovies);

module.exports = router;
