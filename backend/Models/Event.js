const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  category: { type: String },
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
  dateDebut: { type: String },
  dateFin: { type: String},
  price: { type: String },
  maxParticapates : { type: String},
  location : { type: String},
  description : { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('event', eventSchema);
