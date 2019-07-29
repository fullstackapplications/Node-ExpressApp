const express  = require('express');

const app = express();


FgBlack = "\x1b[30m";
FgRed = "\x1b[31m";
FgGreen = "\x1b[32m";
FgYellow = "\x1b[33m";
FgBlue = "\x1b[34m";
FgMagenta = "\x1b[35m";
FgCyan = "\x1b[36m";
FgWhite = "\x1b[37m";

app.listen(3000, () => {

    console.log(FgBlue, 'We"re listening on port 3000 baby! Everything is 200 ok! what');
});



module.exports = app;
