const express = require('express');
const router = express.Router();
const User = require('../mongodb/models/user');

router.post('/', function (req, res) {
  const { username, password } = req.body;
  //check if alreay register
  //incript password
  //save to db
  User.insertMany([{ username, password }]);
  res.send('reg');
});

module.exports = router;
