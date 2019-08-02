const express = require('express');
const router = express.Router();


module.exports = (param) => {

    const { speakerService } = param;

    router.get('/', async(req, res, next) => {
        const speakersList = await speakerService.getList();
        return res.render('speakers',{
            page: 'All Speakers',
            speakersList,
        }); //loads speakers in views folder
    });

    router.get('/:name', (req, res, next) => {
        return res.render('speakers/detail',{
            page: req.params.name,
        }); //loads speakers detail in views folder
    });

    return router;
};
