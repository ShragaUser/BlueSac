const path = require('path');
const express = require('express');

const dbHandler = require(path.resolve(__dirname, '../dbHandler/dbHandler'));
const Person = require(path.resolve(__dirname, '../dbHandler/models/personModel'));

const MODEL_NAME = "Person";

let personHandler = {};
personHandler.read = read;
personHandler.create = create;
personHandler.update = update;
personHandler.deleteMany = deleteMany;

async function create({newObj}) {
    let newPerson = new Person(newObj);
    return await dbHandler.create(newPerson);
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

module.exports = personHandler;
