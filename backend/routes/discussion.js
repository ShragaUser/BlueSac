const express = require('express');
const router = express.Router();

const dbHandler = require('../Handlers/dbHandler/dbHandler');
const Discussion = require('../Handlers/dbHandler/models/discussionModel');

dbHandler.connect();

const MODEL_NAME = "Discussion";

router.get('/', async (req, res, next) => {
    let response = await dbHandler.read(MODEL_NAME);
    res.status(response.status).json(response.message);
});

router.post('/', async (req, res, next) => {
    if(Object.keys(req.body).length !== 0) {
        let newDisc = new Discussion({discussionID: req.body.discussionID, name: req.body.name});
        let response = await dbHandler.create(newDisc);
        res.status(response.status).json(response.message)
    } else
        res.status(412).json({ error: 'Bad input'})
});


router.put('/', async (req, res, next) => {
    if(Object.keys(req.body).length !== 0) {
        let update = req.body.update;
        let filter = req.body.filter;
        let response = await dbHandler.update(MODEL_NAME, filter, update);
        res.status(response.status).json(response.message)
    } else
        res.status(412).json({ error: 'Bad input'})
});

router.delete('/', async (req, res, next) => {
    if(Object.keys(req.body.filter).length !== 0) {
        let filter = req.body.filter;
        let response = await dbHandler.deleteMany(MODEL_NAME, filter);
        res.status(response.status).json(response.message)
    } else
        res.status(412).json({ error: 'Bad input'})
});

module.exports = router;