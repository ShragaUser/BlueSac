const path = require('path');
const mongoose = require('mongoose');

const Role = require(path.resolve(__dirname, './models/roleModel'));
const { mongoDB } = require(path.resolve(__dirname, '../../config/config'));
const Discussion = require(path.resolve(__dirname, './models/discussionModel'));

let dbHandler = {};

dbHandler.create = create;
dbHandler.read = read;
dbHandler.update = update;
dbHandler.deleteMany = deleteMany;

const MODELS = {
    "Role": Role,
    "Discussion": Discussion
};

function connect() {
    dbHandler.dbConn = mongoose.connect(mongoDB).then(() => {
        console.log("connected to mongodb")
    }).catch(err => {
        console.log(err)
    });
}

function create(obj) {
    return new Promise((resolve, reject) => {
        obj.save(err => {
            if(err) resolve({status: 500, message: err});
            else resolve({status: 200, message: 'object has been saved to db'});
        });
    });
}

function read(modelName, filter = {}) {
    return new Promise((resolve, reject) => {
        MODELS[modelName].find(filter, (err, docs) => {
            if (err) resolve({status: 500, message: err});
            resolve({status: 200, message: docs});
        })
    })
}

function update(modelName, filter, obj) {
    return new Promise((resolve, reject) => {
        MODELS[modelName].updateMany(filter, obj, (err, docs) => {
            if (err) resolve({status: 500, message: err});
            resolve({status: 200, message: docs});
        })
    })
}

function deleteMany(modelName, filter) {
    return new Promise((resolve, reject) => {
        MODELS[modelName].deleteMany(filter, (err, docs) => {
            if (err) resolve({status: 500, message: err});
            resolve({status: 200, message: 'docs has been deleted!'});
        })
    })
}

connect();

module.exports = dbHandler;