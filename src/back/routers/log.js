const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.post('/in', async function (req, res) {
  const { username, password } = req.body;
  // TODO user validation and authentication
  const user = { name: username };
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '3600s',
  });
  //save token to cookie.
  res.cookie('token', `${token}`, {
    expires: new Date('26 July 2022'),
  });
  res.end(`token:${token}`);
});

// router.post('/out', async function (req, res) {
//     const { username, password } = req.body;

//   res.end('logout');
// });
module.exports = router;
