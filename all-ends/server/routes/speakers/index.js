const express = require('express');
const router = express.Router();


module.exports = (param) =>
{

    const {speakerService} = param;

    router.get('/', async(req, res, next) =>
    {
        // const speakersList = await speakerService.getList();

        try
        {
            const promises = [];

            promises.push(speakerService.getList());
            promises.push(speakerService.getAllArtwork());

            const results = await Promise.all(promises);

            return res.render('speakers', {
                page: 'All Speakers',
                speakersList: results[0],
                artWork: results[1],
            }); //loads speakers in views folder
        }
        catch(error)
        {
            return error;
        }

    });

    router.get('/:name', async(req, res, next) =>
    {
        try
        {
            const promises = [];
            promises.push(speakerService.getSpeaker(req.params.name));
            promises.push(speakerService.getArtworkForSpeaker(req.params.name));
            const results = await Promise.all(promises);

            if(!results[0])
            {
                return next();
            }

            return res.render('speakers/detail', {
                page: req.params.name,
                speaker: results[0],
                artWork: results[1],
            }); //loads speakers detail in views folder
        }
        catch(error)
        {
            return next(error);
        }

    });

    return router;
};
