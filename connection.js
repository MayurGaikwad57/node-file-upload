const mongoose = require('mongoose');

async function connectDB(db_url) {
  return await mongoose.connect(db_url)
}

module.exports = connectDB;