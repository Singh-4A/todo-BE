const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
