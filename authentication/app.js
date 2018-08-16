const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');
const auth = require('./routes/auth');
mongoose.connect('mongodb://localhost/mern-secure');

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({'extended': 'false'}));
app.use(express.static(path.join(__dirname, 'build')));
app.use('api/auth', auth);

app.listen(4000, 'localhost' ,() => {
    console.log("running");
})