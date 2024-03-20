const obtenerPelis = require("./obtenerPelis");
const { crearMovie, limpiarCampos } = require("./crearMovie");
const formulario = document.querySelector("#formularioPeliculas");
const resetear = document.querySelector("#botonResetear");

obtenerPelis();

formulario?.addEventListener("submit", crearMovie);

resetear?.addEventListener("click", limpiarCampos);
