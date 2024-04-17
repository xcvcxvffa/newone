const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the user schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    // enum: ["admin", "user"],
    default: "user",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
