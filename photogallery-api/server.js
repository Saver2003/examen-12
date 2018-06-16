const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const users = require('./app/users');
const photo = require('./app/photo');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Mongoose connected!');

  app.use('/photo', photo());
  app.use('/users', users());

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
});