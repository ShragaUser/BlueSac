const path = require('path');
const express = require('express');

const utils = require(path.resolve(__dirname, '../../utils/utils.js'));
const dbHandler = require(path.resolve(__dirname, '../dbHandler/dbHandler'));
const Role = require(path.resolve(__dirname, '../dbHandler/models/roleModel'));

const MODEL_NAME = "Role";

let roleHandler = {};
roleHandler.read = read;
roleHandler.create = create;
roleHandler.update = update;
roleHandler.deleteMany = deleteMany;

async function create(body) {
    let newRole = new Role(body.newObj);
    let res = await dbHandler.create(newRole);
    console.log(res);
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

module.exports = roleHandler;
