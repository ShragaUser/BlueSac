const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const personRoutes = require('./routes/person');
const discussionRoutes = require('./routes/discussion');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json);
app.use(morgan('common'));
app.use(cors());
app.use(helmet());
app.use('/api/person', personRoutes);
app.use('/api/discussion', discussionRoutes);

module.exports = app;