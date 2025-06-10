const mongoose = require("mongoose");

const connectionDb = async () => {
  return await mongoose.connect("mongodb://127.0.0.1:27017/myTesting");
};

module.exports=connectionDb