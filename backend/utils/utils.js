let utils = {};

utils.checkRequest = checkRequest;

function checkRequest(req, params) {
    return params.every(param => req.body[param]);
}

module.exports = utils;
