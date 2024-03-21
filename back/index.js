const app = require("./src/server");
const conexionDB = require("./src/config/conDb");

const puerto = 3000;

conexionDB()
  .then(() => {
    app.listen(puerto, () => {
      console.log("Estas en el puerto:" + puerto);
    });
  })
  .catch((error) => {
    console.log("Error al conectar la base de datos: " + error.message);
  });
