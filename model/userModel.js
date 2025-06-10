const mongoose = require("mongoose");
// userSchema for create user
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


// user Model
const User = mongoose.model("user", userSchema);

module.exports = User;
