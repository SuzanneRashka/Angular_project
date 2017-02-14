const express = require('express');
const knex = require('knex');


router.post('/register', (req, res) => {
            const signInfo = checkSignIn(req);
            // console.log(signInfo);
            // Handle rendering / redirecting here.
            // If there arent any validation errors, redirect to '/'
            if (!signInfo.hasError) {
                knex('users').insert({ // table
                        first: req.body.first,
                        last: req.body.last,
                        email: req.body.email,
                        password: req.body.password,
                    })
                    .then(() => {
                        res.redirect('/login');
                    });
            } else {
                res.render('register', {
                    hasError: true,
                    error: signInfo.error,
                });
                // this res.render is refreshing the page, when I only want
                // errors and maintain entered fields
                // signInfo data should be sent to ejs
            }
