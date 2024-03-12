const crearCards = require("./crearCards");

$.get("https://students-api.up.railway.app/movies", (datos) =>
  datos.forEach(crearCards)
);
