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

    router.get('/:name', (req, res, next) =>
    {
        return res.render('speakers/detail', {
            page: req.params.name,
        }); //loads speakers detail in views folder
    });

    return router;
};
