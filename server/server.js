// connectionDb.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Ensure environment variables are loaded here if this file is the entry point
// or if it might be called standalone. If your main server file loads it,
// you might not strictly need it here, but it's safer.
dotenv.config({ path: "./config.env" });

// Increase the buffer timeout at a global level for Mongoose
mongoose.set("bufferTimeoutMS", 30000);

// const connectDB = async () => {
//   try {
//     // You can use a process.env variable for your connection string as well
//     // const conn = await mongoose.connect(process.env.MONGODB_URI, {
//     await mongoose.connect("mongodb://127.0.0.1:27017/myTesting");
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1); // Exit process with failure
//   }
// };

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = await mongoose
      .connect("mongodb://127.0.0.1:27017/myTesting")
      .then((m) => (cached.conn = m));
  }
  return cached.promise;
}


mongoose.connection.on('connected', () => console.log('DB event: connected'));
mongoose.connection.on('error', err => console.error('DB event: error', err));
mongoose.connection.on('disconnected', () => console.log('DB event: disconnected'));


module.exports = connectDB;
