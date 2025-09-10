// api/index.js
const app = require("../backend/server");

// Vercel will call this on every API request
module.exports = (req, res) => app(req, res);
