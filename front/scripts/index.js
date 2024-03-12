const crearCards = require("./crearCards");
const axios = require("axios");

// $.get("https://students-api.up.railway.app/movies", (datos) =>
//   datos.forEach(crearCards)
// );

const obtenerPelis = async () => {
  try {
    const datos = await axios.get("https://students-api.up.railway.app/movies");
    // console.log(datos.data);
    // const pelis = datos.data;
    datos.data.forEach(crearCards);
  } catch (error) {
    alert(error.message);
  }
};

obtenerPelis();
