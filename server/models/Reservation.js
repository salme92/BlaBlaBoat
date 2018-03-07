const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require("../models/User");

const reservationSchema = new Schema({
  author: {
    type:String,
    ref:"User"
  },
  origin: String,
  destination: String,
  date: String,

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
