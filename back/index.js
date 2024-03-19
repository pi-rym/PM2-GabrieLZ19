const app = require("./src/server");
const conexionDB = require("./config/conDb");

const puerto = 3000;

conexionDB()
  .then((res) => {
    app.listen(puerto, () => {
      console.log("Estas en el puerto:" + puerto);
    });
  })
  .catch((error) => {
    console.log("Error al conectar la base de datos");
  });
