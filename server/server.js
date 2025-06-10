const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); // Load environment variables first

// const DB = process.env.DATABASE_URL;

const connectionDb = async () => {
  return await mongoose.connect("mongodb://127.0.0.1:27017/myTesting", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true, // Deprecated in Mongoose 6+, remove if using newer versions
    // useFindAndModify: false // Deprecated in Mongoose 6+, remove if using newer versions
  });
};

mongoose.set('bufferTimeoutMS', 30000)
module.exports = connectionDb;
// console.log('DB URI:', process.env.DATABASE); // Log to verify
// console.log('DB Password exists:', !!process.env.DATABASE_PASSWORD); // Log to verify