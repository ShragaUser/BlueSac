const path = require('path');
const roleHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/roleHandler'));
const personHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/roleHandler'));
const discussionHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/roleHandler'));

let utils = {};

utils.checkRequest = checkRequest;
utils.getModelName = getModelName;
utils.dispatchHandler = dispatchHandler;

const HANDLERS = {
    "role": roleHandler,
    "discussion": discussionHandler,
    "person": personHandler
};

function checkRequest(body, params) {
    return params.every(param => body[param]);
}

function getModelName(url) {
    return url.slice(url.lastIndexOf("/") + 1);
}

async function dispatchHandler(func, req, res, params = []) {
    if(!checkRequest(req.body, params))
        res.status(412).json({ error: 'Bad input' });
    else {
        let response = await func(req.body);
        res.status(response.status).json(response.message);
    }
}

module.exports = utils;