const path = require('path');
const express = require('express');

const dbHandler = require(path.resolve(__dirname, '../dbHandler/dbHandler'));
const Discussion = require(path.resolve(__dirname, '../dbHandler/models/discussionModel'));

const MODEL_NAME = "Discussion";

let discussionHandler = {};
discussionHandler.read = read;
discussionHandler.create = create;
discussionHandler.update = update;
discussionHandler.deleteMany = deleteMany;

async function create({newObj}) {
    let newDiscussion = new Discussion(newObj);
    return await dbHandler.create(newDiscussion);
}

async function read({filter}) {
    return await dbHandler.read(MODEL_NAME, filter || {});
}

async function update({update, filter}) {
    return await dbHandler.update(MODEL_NAME, filter, update);
}

async function deleteMany({filter}) {
    return await dbHandler.deleteMany(MODEL_NAME, filter || {});
}

module.exports = discussionHandler;