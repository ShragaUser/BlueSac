let utils = {};

utils.checkRequest = checkRequest;

function checkRequest(req, params) {
    let toReturn = true;
    params.forEach(param => {
        if (!req.body[param])
            toReturn = false;
    });

    return toReturn;
}

module.exports = utils;