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
    await utils.dispatchHandler(HANDLERS[modelName].read, req, res);
});

router.post('/', async (req, res, next) => {
    let modelName = utils.getModelName(req.baseUrl);
    await utils.dispatchHandler(HANDLERS[modelName].create, req, res, ['newObj']);
});

router.put('/', async (req, res, next) => {
    let modelName = utils.getModelName(req.baseUrl);
    await utils.dispatchHandler(HANDLERS[modelName].update, req, res, ['update', 'filter']);
});

router.delete('/', async (req, res, next) => {
    let modelName = utils.getModelName(req.baseUrl);
    await utils.dispatchHandler(HANDLERS[modelName].deleteMany, req, res);
});

module.exports = router;