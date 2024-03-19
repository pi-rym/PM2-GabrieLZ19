const mongoose = require("mongoose");
require("dotenv").config();

const conexionDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = conexionDB;
