// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const Product = require("./models/productModel");
// const products = require("./data/products.json");
// const connectDatabase = require("./config/database");

// // Load env
// dotenv.config({ path: "./config/config.env" });

// // Debugging
// console.log("MONGO_URI from env:", process.env.MONGO_URI);

// // Connect to DB
// connectDatabase();

// const seedProducts = async () => {
//   try {
//     await Product.deleteMany();
//     console.log("Products Deleted");

//     // Add a dummy user id (yaha ek valid User _id dalna hoga baad me)
//     const sampleProducts = products.map((p) => {
//       return { ...p, user: "64f5c8e7a3b2c0d5e7f0abcd" };
//     });

//     await Product.insertMany(sampleProducts);
//     console.log("All Products Added");

//     process.exit();
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// };

// seedProducts();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/productModel");
const products = require("./data/products.json");
const connectDatabase = require("./config/database");

// Load env
dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products Deleted");

    await Product.insertMany(products);
    console.log("All Products Added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedProducts();
