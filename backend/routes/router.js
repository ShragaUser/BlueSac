const path = require('path');
const express = require('express');
const router = express.Router();

const utils = require(path.resolve(__dirname, '../utils/utils.js'));
const roleHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/roleHandler'));
const personHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/personHandler'));
const discussionHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/discussionHandler'));

const HANDLERS = {
    "role": roleHandler,
    "discussion": discussionHandler,
    "person": personHandler
};

router.get('/', (req, res, next) => {
    let modelName = utils.getModelName(req.baseUrl);
    utils.errorHandler(utils.dispatchHandler, HANDLERS[modelName].read, req, res);
});

router.post('/', (req, res, next) => {
    let modelName = utils.getModelName(req.baseUrl);
    utils.errorHandler(utils.dispatchHandler, HANDLERS[modelName].create, req, res, ['newObj']);
});

router.put('/', (req, res, next) => {
    let modelName = utils.getModelName(req.baseUrl);
    utils.errorHandler(utils.dispatchHandler, HANDLERS[modelName].update, req, res, ['update', 'filter']);
});

router.delete('/', (req, res, next) => {
    let modelName = utils.getModelName(req.baseUrl);
    utils.errorHandler(utils.dispatchHandler, HANDLERS[modelName].deleteMany, req, res);
});

router.get('/calculate', (req, res, next) => {

});

module.exports = router;