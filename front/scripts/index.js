const crearCards = require("./crearCards");
const axios = require("axios");

// $.get("https://students-api.up.railway.app/movies", (datos) =>
//   datos.forEach(crearCards)
// );

const fetchData = async () => {
  try {
    const datos = await axios.get("https://students-api.up.railway.app/movies");
    // console.log(datos.data);
    const pelis = datos.data;
    pelis.forEach(crearCards);
  } catch (error) {
    error.message;
  }
};

fetchData();
