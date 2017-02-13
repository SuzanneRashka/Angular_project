//set up
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var db = require('./knex');

//set view engine to ejs
app.set('view engine', 'ejs');
//configuration

app.use(express.static(__dirname + '/app/static'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('landing');
});
//listen
app.listen(8000);
///fjdkla;
