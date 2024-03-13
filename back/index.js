const app = require("./src/server");

const puerto = 3000;

app.listen(puerto, () => {
  console.log("Estas en el puerto:" + puerto);
});
