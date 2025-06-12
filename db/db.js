require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.DATABASE_URL;
  console.log('Connecting to:', uri);
  await mongoose.connect(uri); // No need for useNewUrlParser or useUnifiedTopology in Mongoose 6+
}

mongoose.connection
  .on('connected', () => console.log('DB event: connected'))
  .on('error', err => console.error('DB event: error', err))
  .on('disconnected', () => console.log('DB event: disconnected'));

module.exports = connectDB;
