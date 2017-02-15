const environment = process.env.NODE_ENV || 'development';
const express = require('express');
const router = express.Router();
const knex = require('knex');

//routing only, no knex



// router.get('registration', (req, res) => {
//     res.render('landing', {
//         hasError: false,
//         first: '',
//         last: '',
//         email: '',
//         password: ''
//     });
// });



function checkName() {} //does not contain numbers
function checkEmail() {} //contains @ and .
function checkPassword() {} // length, special chars, nums and letters

module.exports = router;
