//const path = require('path');
const express = require('express');
const router = express.Router();

// const rootDir = require('../util/path')

router.get('/',(req, res, next) => {
    res.render('pages/index', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS
        activeTA02: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;