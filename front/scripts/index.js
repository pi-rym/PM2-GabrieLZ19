const crearCards = require("./crearCards");
const axios = require("axios");

const obtenerPelis = async () => {
  try {
    const datos = await axios.get("https://students-api.up.railway.app/movies");

    datos.data.forEach(crearCards);
  } catch (error) {
    alert(error.message);
  }
};

obtenerPelis();
