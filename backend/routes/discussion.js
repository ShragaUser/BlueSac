const path = require('path');
const express = require('express');
const router = express.Router();

const utils = require(path.resolve(__dirname, '../utils/utils.js'));
const dbHandler = require(path.resolve(__dirname, '../Handlers/dbHandler/dbHandler'));
const Discussion = require(path.resolve(__dirname, '../Handlers/dbHandler/models/discussionModel'));

const MODEL_NAME = "Discussion";

router.get('/', async (req, res, next) => {
    let filter = {};
    if(utils.checkRequest(req, ['filter']))
        filter = req.body.filter;

    let response = await dbHandler.read(MODEL_NAME, filter);
    res.status(response.status).json(response.message);
});

router.post('/', async (req, res, next) => {
    if(utils.checkRequest(req, ['newObj'])) {
        let newDisc = new Discussion(req.body.newObj);
        let response = await dbHandler.create(newDisc);
        res.status(response.status).json(response.message)
    } else
        res.status(412).json({ error: 'Bad input'})
});

router.put('/', async (req, res, next) => {
    if(utils.checkRequest(req, ['update', 'filter'])) {
        let update = req.body.update;
        let filter = req.body.filter;
        let response = await dbHandler.update(MODEL_NAME, filter, update);
        res.status(response.status).json(response.message)
    } else
        res.status(412).json({ error: 'Bad input'})
});

router.delete('/', async (req, res, next) => {
    if(utils.checkRequest(['filter'])) {
        let filter = req.body.filter;
        let response = await dbHandler.deleteMany(MODEL_NAME, filter);
        res.status(response.status).json(response.message)
    } else
        res.status(412).json({ error: 'Bad input'})
});

module.exports = router;