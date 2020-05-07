const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const adminSchema = mongoose.Schema({
  lastname: {
    type: String,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Admin", adminSchema);
