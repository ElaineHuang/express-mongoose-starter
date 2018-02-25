const serverConfig = require('./configs/server-config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes/index');

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/users');
}

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS, HEAD');
  res.header('Access-Control-Allow-Headers', 'content-type');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use(bodyParser.json());
routes(app);

app.listen(process.env.PORT || 3000, () => {
  console.log('node development mode now is listening on:');
  console.log(`http://localhost:${serverConfig.nodeServerPort}`);
  console.log(`http://127.0.0.1:${serverConfig.nodeServerPort}`);
  console.log(serverConfig.nodeDevAddress);
});
