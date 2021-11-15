'use strict';
import axios from 'axios';

const handleRegistration = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:3000/register', {
      username: document.getElementById('username-inpt').value,
      password: document.getElementById('password-inpt').value,
    });
  } catch (err) {
    console.log(err);
  }
};

document
  .getElementById('register-btn')
  .addEventListener('click', handleRegistration);
