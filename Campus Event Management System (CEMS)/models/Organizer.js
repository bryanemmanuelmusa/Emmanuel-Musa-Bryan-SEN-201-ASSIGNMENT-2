const mongoose = require("mongoose");

const OrganizerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model("Organizer", OrganizerSchema);
