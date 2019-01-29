let utils = {};

utils.checkRequest = checkRequest;
utils.getModelName = getModelName;

function checkRequest(body, params) {
    return params.every(param => body[param]);
}

function getModelName(url) {
    return url.slice(url.lastIndexOf("/") + 1);
}

module.exports = utils;
