const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./server/routes');
const cors = require('cors');

app.use(cors())

//Parse the content in the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Pass app to the routes
routes(app);

app.listen(3000);
console.log('App is listening on port 3000.')

module.exports = app;