//const path = require('path');
const express = require('express');
const router = express.Router();

// const rootDir = require('../util/path')

router.get('/',(req, res, next) => {
    res.render('pages/index', { 
        title: 'Team Activity 03', 
        path: '/ta03', // For pug, EJS 
        activeTA02: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;