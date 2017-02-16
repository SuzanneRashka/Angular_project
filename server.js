'use strict';

//set up
const express = require('express');
const app = express();
const knex = require('knex');
//const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var db = require('./knex');
const morgan = require('morgan');
const port = process.env.PORT || 8000;

//routes
var registration = require('./routes/registration');
var login = require('./routes/login');

app.use(registration);
app.use(login);

//set view engine to ejs
app.set('view engine', 'ejs');

//configuration
app.use(express.static(__dirname + '/app/static'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.disable('x-powered-by');
app.use(bodyParser.json());

//render landing
app.get('/', (req, res) => {
    res.render('landing');
});

//listen
app.listen(8000, function() {
    console.log('listening on port',
        8000);
});

module.exports = app;
