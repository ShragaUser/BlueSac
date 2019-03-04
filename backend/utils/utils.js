let utils = {};

utils.checkRequest = checkRequest;
utils.getModelName = getModelName;
utils.errorHandler = errorHandler;
utils.dispatchHandler = dispatchHandler;

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
        res.status(response.status).json(response);
    }
}

function errorHandler(func, ...args) {
    try {
        func(...args);
    } catch (error) {
        console.error(error);
    }
}

module.exports = utils;