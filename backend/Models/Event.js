const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  category: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
  dateDebut: { type: Date, required: true },
  dateFin: { type: Date, required: true },
  price: { type: String, required: true },
  maxParticapates : { type: String, required: true },
  location : { type: String, required: true },
  description : { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('event', eventSchema);
