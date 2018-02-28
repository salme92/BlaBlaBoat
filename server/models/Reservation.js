const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reservationSchema = new Schema({
  name: String,
  date: String,
  prize: Number

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;