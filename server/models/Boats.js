const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const boatSchema = new Schema({
  name: String,
  type: String,
  imgBoat: {type: String, default: ''}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Boats = mongoose.model('Boats', boatSchema);
module.exports = Boats;