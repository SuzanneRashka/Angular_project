//set up
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


//configuration

app.use(express.static(__dirname + '/static'));

app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('*', (req, res) => res.status(200).send({
    message: 'Listening  on port '
}))
//listen


app.listen(3000);
