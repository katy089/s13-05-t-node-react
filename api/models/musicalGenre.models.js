const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'closed'],
    default: 'active'
  }
});

const musicalGenreModel = mongoose.model("musicalGenre", schema);

module.exports = musicalGenreModel;
