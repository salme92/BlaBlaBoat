const mongoose = require('mongoose');
const User   = mongoose.Schema;

const userSchema = new User({
  username: {
  type: String,
  role: {
    type: String,
    enum: ['Capitan', 'Cliente'],
    default: 'Cliente',
    }
  },

  password: {
    type: String,
  },

  imageProfile: {
    type: String,
    default: 'http://via.placeholder.com/350x150',
  },

  Valoration: {
    type: Number,
  },
});

module.exports = mongoose.model('User', userSchema);