const express  = require('express');
const createError = require('http-errors');
const path = require('path');
const routes = require('./routes');
const configs = require('./config/');


FgBlack = "\x1b[30m";
FgRed = "\x1b[31m";
FgGreen = "\x1b[32m";
FgYellow = "\x1b[33m";
FgBlue = "\x1b[34m";
FgMagenta = "\x1b[35m";
FgCyan = "\x1b[36m";
FgWhite = "\x1b[37m";



const app = express();
const config = configs[app.get('env')];     // get the current environment by default it's production


//use pug as the view engine
app.set('view engine', 'pug');
//if environment variable is development
//then beautify the html
if(app.get('env') === 'development')
{
    app.locals.pretty = true;
}
//returns second argument for first argument
app.set('views', path.join(__dirname, './views'));
app.locals.title = config.sitename;                 //sets title of site from /config/index.js
// app.use( (req, res, next) => {
//     res.locals.rendertime = new Date();
//     return next();
// });



// tells you to ignore this file
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
});

// injects middleware into location
app.use('/', routes());

// tells you to use files found in public folder
app.use(express.static('public'));

app.use((req, res, next) => {
    return next(createError(404, 'File not found'));
    // next(); // for some reason above chokes everything.
});

app.use( (err, req, res, next) => {
    res.locals.message = err.message;   //makes error message available in the template
    const status = err.status || 500;   // sets error status code
    res.locals.status = status;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(status);
    return res.render('error');
});



//starts the server a port mentioned
app.listen(3000, () => {

    console.log(FgCyan, 'We\'re listening on port 3000 baby! Everything is 200 ok!');
});



module.exports = app;
