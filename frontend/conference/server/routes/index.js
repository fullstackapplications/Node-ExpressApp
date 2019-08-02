const express = require('express');
const router = express.Router();
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

module.exports = (param) => {

    const { speakerService } = param;

    router.get('/', async (req, res, next) => {

        const speakersList = await speakerService.getListShort();

        // return res.send('Index');
        return res.render('index', {
            page: 'Home',
            speakersList,
        }); // loads views/index.pug
    });

    router.use('/speakers', speakersRoute(param));

    router.use('/feedback', feedbackRoute(param));

    return router;
};
