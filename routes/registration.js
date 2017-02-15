const express = require('express');
const router = express.Router();
const knex = require('knex');

//routing only, no knex

exports.registration = function(req, res) {
    res.render('registration', {
        title: 'AJAX Testing'
    });
};
// router.get('/register', (req, res) => {
//     res.render('register', {
//         hasError: false,
//         first: '',
//         last: '',
//         email: '',
//         password: '',
//     });
// });
//
// router.post('/register', (req, res) => {
//     // console.log(signInfo);
//     // Handle rendering / redirecting here.
//     // If there arent any validation errors, redirect to '/'
//     if (!signInfo.hasError) {
//         knex('users').insert({ // table
//                 first: req.body.first,
//                 last: req.body.last,
//                 email: req.body.email,
//                 password: req.body.password,
//             })
//             .then(() => {
//                 res.redirect('/login');
//             });
//     } else {
//         res.render('register', {
//             hasError: true,
//             error: signInfo.error,
//         });
//         // this res.render is refreshing the page, when I only want
//         // errors and maintain entered fields
//         // signInfo data should be sent to ejs
//     }
// });

function checkName() {} //does not contain numbers
function checkEmail() {} //contains @ and .
function checkPassword() {} // length, special chars, nums and letters

module.exports = router;
