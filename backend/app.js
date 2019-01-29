const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');

const router = require(path.resolve(__dirname, './routes/router'));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());
app.use(helmet());

app.use('/api/role', router);
app.use('/api/person', router);
app.use('/api/discussion', router);

module.exports = app;