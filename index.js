/*******************************************************************************
 * Feel free to remove this comment block after pulling. 
 * It's for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or correct yours off of after working at least 1 hour on Team Activity 02.
 * The main purpose of the app is to 
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();

// Route setup. You can implement more in the future!
const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03');

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .use('/ta01', ta01Routes)
   .use('/ta02', ta02Routes)
   .use('/ta03', ta03Routes)
   .get('/', (req, res, next) => {
     // This is the primary index
     res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     // This will serve as our 404 page...
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   })
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));
