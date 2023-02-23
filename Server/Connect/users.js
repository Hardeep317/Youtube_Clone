const mongoose = require("mongoose");

let userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  }
});
let User = mongoose.model("users", userschema);
module.exports = User;