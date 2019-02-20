const path = require('path');
const roleHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/roleHandler'));
const personHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/roleHandler'));
const discussionHandler = require(path.resolve(__dirname, '../Handlers/modelHandlers/roleHandler'));

let utils = {};

utils.checkRequest = checkRequest;
utils.getModelName = getModelName;
utils.errorHandler = errorHandler;
utils.dispatchHandler = dispatchHandler;
utils.calculateProgress = calculateProgress;

const HANDLERS = {
    "role": roleHandler,
    "discussion": discussionHandler,
    "person": personHandler
};

function checkRequest(body, params) {
    return params.every(param => (body[param] && Object.keys(body[param]).length > 0));
}

function getModelName(url) {
    return url.slice(url.lastIndexOf("/") + 1);
}

async function dispatchHandler(func, {body}, res, params = []) {
    if(!checkRequest(body, params))
        res.status(412).json({ error: 'Bad input' });
    else {
        let response = await func(body);
        res.status(response.status).json(response.message);
    }
}

function errorHandler(func, ...args) {
    try{
        func(...args);
    } catch (error) {
        console.error(error);
    }
}

module.exports = utils;