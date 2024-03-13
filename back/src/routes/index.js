const { Router } = require("express");
const moviesRoute = require("./moviesRouter");

const router = Router();

router.use("/movies", moviesRoute);

module.exports = router;
