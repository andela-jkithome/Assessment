const express = require('express');
const app = express();
const bodyParser = require('bodyParser');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const routes = require('./server/routes');
mongoose.Promise = bluebird;

mongoose.connect('mongodb://localhost:27017/assessment');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

routes(app);

module.exports(app);