const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const personRoutes = require(path.resolve(__dirname, './routes/person'));
const discussionRoutes = require(path.resolve(__dirname, './routes/discussion'));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());
app.use(helmet());

app.use('/api/person', personRoutes);
app.use('/api/discussion', discussionRoutes);

module.exports = app;