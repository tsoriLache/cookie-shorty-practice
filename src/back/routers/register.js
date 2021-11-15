const express = require('express');
const router = express.Router();
const User = require('../mongodb/models/user');

router.post('/', async function (req, res) {
  const { username, password } = req.body;
  //check if already register
  const result = await User.findOne({ username });
  if (result) {
    res.send('already registered');
  } else {
    //TODO incript password

    //save to db
    User.insertMany([{ username, password }]);
    res.send('register succeeded');
  }
});

module.exports = router;
