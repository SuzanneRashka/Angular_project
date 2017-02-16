'use strict';
const express = require('express');
const router = express.Router();

var fs = require('fs');
var path = require('path');
//svar usersPath = path.join(__dirname, '../users.json');

router.get('/login', (req, res) => {
    res.render('./login');
});

module.exports = router;
