const path = require('path');
const dev = require(path.resolve(__dirname, './dev.config'));
const prod = require(path.resolve(__dirname, './prod.config'));

let config = process.env.NODE_ENV === 'test' ? dev : prod;

module.exports = config;