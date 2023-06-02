const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last: {
    type: Number,
    required: true,
  },
  buy: {
    type: Number,
  },
  sell: {
    type: Number,
  },
  volume: {
    type: Number,
  },
  base_unit: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
