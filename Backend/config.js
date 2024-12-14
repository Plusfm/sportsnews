const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex'); // 32 bytes = 256 bits




require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  mongoUri: process.env.MONGO_URL,
};
