const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

module.exports = (param) => {

    // create application/x-www-form-urlencoded parser
    const urlencodedParser = bodyParser.urlencoded({ extended: true });
    const { feedbackService } = param;

    router.get('/', async (req, res, next) => {
        // return res.send('Feedback');
        try {
            const feedbacklist = await feedbackService.getList();
            return res.render('feedback', {
                page: 'Feedback',
                feedbacklist,
                success: req.query.success,
            });
        } catch(error) {
            return error;
        }

    });

    router.post('/', urlencodedParser, async(req, res, next) => {

        try {
            console.log(req.body);
            const fbName = req.body.fbName.trim();
            const fbTitle = req.body.fbTitle.trim();
            const fbMessage = req.body.fbMessage.trim();
            const feedbacklist = await feedbackService.getList();

            if(!fbName || !fbTitle || !fbMessage){
                return res.render('feedback', {
                    page: 'Feedback',
                    error: true,
                    fbName,
                    fbTitle,
                    fbMessage,
                    feedbacklist
                })
            }

            // return res.send(`Form sent!`);
            return res.redirect('/feedback?success=true');
        } catch(error){
            return next(error);
        }

    });

    return router;
};
