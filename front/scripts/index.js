const crearCards = require("./crearCards");

$.get("https://students-api.2.us-1.fl0.io/movies", (datos) =>
  datos.forEach(crearCards)
);
