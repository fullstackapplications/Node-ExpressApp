const express = require('express');
const router = express.Router();
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

module.exports = () => {

    router.get('/', (req, res, next) => {
        // return res.send('Index');
        return res.render('index', {
            page: 'Home',
        }); // loads views/index.pug
    });

    router.use('/speakers', speakersRoute());

    router.use('/feedback', feedbackRoute());

    return router;
};
