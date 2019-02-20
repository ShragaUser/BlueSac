const path = require('path');
const express = require('express');

const dbHandler = require(path.resolve(__dirname, '../dbHandler/dbHandler'));
const Role = require(path.resolve(__dirname, '../dbHandler/models/roleModel'));

const MODEL_NAME = "Role";

let roleHandler = {};
roleHandler.read = read;
roleHandler.create = create;
roleHandler.update = update;
roleHandler.deleteMany = deleteMany;

async function create({newObj}) {
    let newRole = new Role(newObj);
    return await dbHandler.create(newRole);
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

module.exports = roleHandler;