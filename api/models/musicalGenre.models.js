const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const musicalGenreModel = mongoose.model("musicalGenre", schema);

module.exports = musicalGenreModel;
