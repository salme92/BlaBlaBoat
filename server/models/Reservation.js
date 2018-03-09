const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require("../models/User");

const reservationSchema = new Schema({
  author: {
    user_Id: { type: Schema.Types.ObjectId, ref: "User", require: true}
  },
  origin: String,
  destination: String,
  date: String,
  latitud: Number,
  longitude: Number,

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
