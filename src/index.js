require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { corsOptions } = require('./config/corsConfig');

mongoose.set('strictQuery', false);
const Routes = require('../src/routes/RegistryRoutes.js');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/', Routes);

// Conexión a MongoDB
mongoose
  .connect(`mongodb+srv://manuel101284:e34Mw3ku2jb9DWAT@back-app-alturas.m3i3g.mongodb.net/?retryWrites=true&w=majority&appName=back-app-alturas`)
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  })

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

