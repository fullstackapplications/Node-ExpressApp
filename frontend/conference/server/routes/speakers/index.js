const express = require('express');
const router = express.Router();


module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.render('speakers',{
            page: 'All Speakers',
        }); //loads speakers in views folder
    });

    router.get('/:name', (req, res, next) => {
        return res.render('speakers/detail',{
            page: req.params.name,
        }); //loads speakers detail in views folder
    });

    return router;
};
