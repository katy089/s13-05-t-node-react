const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const bandModel = mongoose.model("band", schema);

module.exports = bandModel;
