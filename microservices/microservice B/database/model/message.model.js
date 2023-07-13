const mongoose = require("mongoose");

module.exports = mongoose.model(
  "messages",
  new mongoose.Schema({
    content: String,
  })
);
