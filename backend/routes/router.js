const path = require('path');
const express = require('express');
const router = express.Router();

const utils = require(path.resolve(__dirname, '../utils/utils.js'));
const roleHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/roleHandler'));
const personHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/roleHandler'));
const discussionHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/roleHandler'));

const HANDLERS = {
    "role": roleHandler,
    "discussion": discussionHandler,
    "person": personHandler
};

router.get('/', async (req, res, next) => {
    let modelName = utils.getModelName(req.baseUrl);
    let response = await HANDLERS[modelName].read(req.body);
    res.status(response.status).json(response.message);
});

router.post('/', async (req, res, next) => {
    let modelName = utils.getModelName(req.baseUrl);
    if(utils.checkRequest(req.body, ['newObj'])) {
        let response = await HANDLERS[modelName].create(req.body);
        res.status(response.status).json(response.message)
    } else
        res.status(412).json({ error: 'Bad input' })
});

router.put('/', async (req, res, next) => {
    let modelName = utils.getModelName(req.baseUrl);
    if(utils.checkRequest(req, ['update', 'filter'])) {
        let response = await HANDLERS[modelName].update(req.body);
        res.status(response.status).json(response.message)
    } else
        res.status(412).json({ error: 'Bad input'})
});

router.delete('/', async (req, res, next) => {
    let modelName = utils.getModelName(req.baseUrl);
    let response = await HANDLERS[modelName].deleteMany(req.body);
    res.status(response.status).json(response.message);
});

module.exports = router;