const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); // Load environment variables first

const DB = process.env.DATABASE_URL;

const connectionDb = async () => {
  return await mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true, // Deprecated in Mongoose 6+, remove if using newer versions
    // useFindAndModify: false // Deprecated in Mongoose 6+, remove if using newer versions
  });
};
module.exports = connectionDb;
