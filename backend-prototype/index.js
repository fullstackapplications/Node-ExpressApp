const express = require('express');



const app = express();

//injects middleware, called for every request
app.use( (req, res, next) => {
    res.setHeader('x-server-date', new Date().toString() );
    return next();
});


app.get('/', (req, res, next) => {
    return res.send('Hello this is a web server!');
});

app.get('/throw', (req, res, next) => {
    throw new Error('Something is wrong');
});

app.get('/next', (req, res, next) => {
    setTimeout( () => {
        next( new Error('Something is wrong') );
    },1000)
    // next( new Error('Something is wrong') );
});

app.get('/time', (req, res, next) => {
    return res.send( new Date().toString() );
});

app.get('/hello', (req, res, next) => {

    if(!req.query.name)
    {
        res.status(400).end();
    }

    return res.send( `Hello ${req.query.name}`);
});

app.get('/user/:name', (req, res, next) => {
    return res.send(`User profile of ${req.params.name}`);
});

app.get('/', (req, res, next) => {
    return res.send('Hello this is a web server!');
});

app.get('/', (req, res, next) => {
    return res.send('Hello this is a web server!');
});


app.listen(3000, ()=> {
    console.log('listening on port 3000!');
});
