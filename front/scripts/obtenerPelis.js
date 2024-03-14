const crearCards = require("./crearCards");
const axios = require("axios");

const obtenerPelis = async () => {
  try {
    const datos = await axios.get("http://localhost:3000/movies");

    datos.data.forEach(crearCards);
  } catch (error) {
    alert(error.message);
  }
};

module.exports = obtenerPelis;
