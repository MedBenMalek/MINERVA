const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Post', postSchema);
