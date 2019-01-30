const path = require('path');
const express = require('express');

const utils = require(path.resolve(__dirname, '../../utils/utils.js'));
const dbHandler = require(path.resolve(__dirname, '../dbHandler/dbHandler'));
const Discussion = require(path.resolve(__dirname, '../dbHandler/models/discussionModel'));

const MODEL_NAME = "Discussion";

let discussionHandler = {};
discussionHandler.read = read;
discussionHandler.create = create;
discussionHandler.update = update;
discussionHandler.deleteMany = deleteMany;

async function create(body) {
    let newDiscussion = new Discussion(body.newObj);
    let res = await dbHandler.create(newDiscussion);
    return res;
}

async function read(body) {
    let filter = {};
    if(utils.checkRequest(body, ['filter']))
        filter = body.filter;
    return await dbHandler.read(MODEL_NAME, filter);
}

async function update(body) {
    let update = body.update;
    let filter = body.filter;
    return await dbHandler.update(MODEL_NAME, filter, update);
}

async function deleteMany(body) {
    let filter = {};
    if(utils.checkRequest(body, ['filter']))
        filter = body.filter;
    return await dbHandler.deleteMany(MODEL_NAME, filter);
}

module.exports = discussionHandler;
