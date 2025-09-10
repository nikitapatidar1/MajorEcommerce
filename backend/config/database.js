// const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     })
//     .then((data) => {
//       console.log(`Mongodb connected with server: ${data.connection.host}`);
//     });
// };

// module.exports = connectDatabase;

// backend/config/database.js
const mongoose = require("mongoose");

let cached = global.mongoose; // global variable to reuse between calls

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDatabase() {
  if (cached.conn) {
    return cached.conn; // agar pehle se connection hai toh use karo
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose
      .connect(process.env.MONGO_URI, opts)
      .then((mongoose) => {
        console.log(
          `MongoDB connected with server: ${mongoose.connection.host}`
        );
        return mongoose.connection;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectDatabase;
