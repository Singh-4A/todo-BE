require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.DATABASE_URL;
  console.log('Connecting to:', uri);
  if (!uri) {
    throw new Error('DATABASE_URL is undefined');
  }
  await mongoose.connect(uri);
  console.log('Connected to MongoDB');
}


mongoose.connection
  .on('connected', () => console.log('DB event: connected'))
  .on('error', err => console.error('DB event: error', err))
  .on('disconnected', () => console.log('DB event: disconnected'));

module.exports = connectDB;
