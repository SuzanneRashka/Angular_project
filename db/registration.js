const express = require('express');
const knex = require('knex');

// knex only

// knex('users').insert({ // table
//         first: req.body.first,
//         last: req.body.last,
//         email: req.body.email,
//         password: req.body.password,
//     })
//     .then(() => {
//         res.redirect('/login');
//     });
