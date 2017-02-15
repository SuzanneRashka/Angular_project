const express = require('express');
const knex = require('knex');

// knex only
function postUser(req, res, next) {
    knex('users').insert({ // table
            first: req.body.first,
            last: req.body.last,
            email: req.body.email,
            password: req.body.password,
        })
        .then(() => {
            res.redirect('/login');
        });
};

function getUsers(req, res, next) {
    db.any('select * from users')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data,
                    data,
                    message: 'Retrieved all users'
                });
        })
        .catch(function(err) {
            return next(err);
        });
}
