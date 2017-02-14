const express = require('express');
const router = express.Router();

router.get('registration', (req, res) => {
    res.render('landing', {
        hasError: false,
        first: '',
        last: '',
        email: '',
        password: ''
    });
});

router.post('/')
