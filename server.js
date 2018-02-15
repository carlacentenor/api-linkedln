const express = require('express');
const app = express();
const server = app.listen(3004, onServer);

function onServer() {
  console.log('servidor encendido');
}

app.use(express.static('public'));