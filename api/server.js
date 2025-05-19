require('dotenv').config();
const mongoose = require('mongoose');
const app = require('../app');

let isConnected = false;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conectado ao MongoDB.");
  isConnected = true;
})
.catch((err) => {
  console.error("Erro ao conectar com o MongoDB:", err);
});

if (isConnected)
  module.exports = app;
