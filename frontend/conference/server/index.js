const express  = require('express');
const routes = require('./routes');
const path = require('path');


FgBlack = "\x1b[30m";
FgRed = "\x1b[31m";
FgGreen = "\x1b[32m";
FgYellow = "\x1b[33m";
FgBlue = "\x1b[34m";
FgMagenta = "\x1b[35m";
FgCyan = "\x1b[36m";
FgWhite = "\x1b[37m";



const app = express();
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



// tells you to ignore this file
app.get('./favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
});

// injects middleware into location
app.use('/', routes());
// tells you to use files found in public folder
app.use(express.static('public'));
//starts the server a port mentioned
app.listen(3000, () => {

    console.log(FgBlue, 'We\'re listening on port 3000 baby! Everything is 200 ok!');
});



module.exports = app;
