// backend/dbConnect.js
const mongoose = require("mongoose");

let cached = global.__mongoCached;
if (!cached) {
  cached = global.__mongoCached = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn; // already connected

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose
      .connect(process.env.MONGO_URI, opts)
      .then((mongoose) => {
        console.log(`✅ MongoDB connected: ${mongoose.connection.host}`);
        return mongoose.connection;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; // agar error ho toh next call me retry ho sake
    throw e;
  }

  return cached.conn;
}

module.exports = connectDB;
