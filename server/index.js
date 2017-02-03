// Application Starting Point
const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const compression = require('compression');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', (err) => {
  if (err) console.log('error connecting to db', err);
  else console.log('Successfully connected to db');
});

app.use(cors());
app.use(logger('combined'));
app.use(compression());
app.use(bodyParser.json({ "limit": "5mb" }));
app.use(bodyParser.urlencoded({ "extended": false, "limit": "5mb" }));
app.use(express.static(path.join(__dirname, 'public')));
router(app);

// Server Setup
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);
console.log('Server spinning on port', port);
