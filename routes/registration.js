'use strict';
const express = require('express');
const router = express.Router();

var fs = require('fs');
var path = require('path');
//var usersPath = path.join(__dirname, '../users.json');

//quick routing message to get things going
router.get('/registration', (req, res) => {
    res.render('./registration');
});

function checkName() {} //does not contain numbers
function checkEmail() {} //contains @ and .
function checkPassword() {} // length, special chars, nums and letters

module.exports = router;
