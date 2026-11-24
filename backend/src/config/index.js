const path = require('path');

module.exports = {
  PORT: process.env.PORT || 5000,
  DATA_FILE_PATH: path.join(__dirname, '..', 'data', 'store.json'),
  SEED_FILE_PATH: path.join(__dirname, '..', 'data', 'initialSeed.json'),
  CORS_ORIGIN: process.env.CORS_ORIGIN || '*'
};
