const path = require('path');
const express = require('express');

const utils = require(path.resolve(__dirname, '../../utils/utils.js'));
const dbHandler = require(path.resolve(__dirname, '../dbHandler/dbHandler'));
const Person = require(path.resolve(__dirname, '../dbHandler/models/personModel'));

const MODEL_NAME = "Person";

let personHandler = {};
personHandler.read = read;
personHandler.create = create;
personHandler.update = update;
personHandler.deleteMany = deleteMany;

async function create(body) {
    let newPerson = new Person(body.newObj);
    let res = await dbHandler.create(newPerson);
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

module.exports = personHandler;
