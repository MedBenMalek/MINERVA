const mongoose = require('mongoose');

const demandSchema = mongoose.Schema({
  category: { type: String },
  name: { type: String },
  description : { type: String },
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  phone: { type: String },
  decoration: { type: String },
  music: { type: String },
  location: { type: String },
  musictype: { type: String}
});

module.exports = mongoose.model('demand', demandSchema);
