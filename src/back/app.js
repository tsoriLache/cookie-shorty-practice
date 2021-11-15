const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const cors = require('cors');
const api = require('./routers/api');
const redirect = require('./routers/redirect');
const register = require('./routers/register');
const log = require('./routers/log');
const errorHandler = require('./middleware/errorHandler');
const tokenCheck = require('./middleware/token');
const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_URI;
mongoose
  .connect(url)
  .then(() => {
    console.log('mongoDB connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use('/', express.static(path.resolve('./dist'))); // serve main path as static dir
app.get('/', function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve('./dist/index.html'));
});

app.use('/register', register);
app.use('/log', log);
app.use('/api/', tokenCheck, api);
app.use('/s/', redirect);
app.use(errorHandler);

// start the server
app.listen(port, function () {
  console.log('app started');
});
