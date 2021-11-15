const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  counter: {
    type: Number,
    default: 0,
    required: true,
  },
});

const Url = mongoose.model('Url', UrlSchema);

module.exports = Url;
