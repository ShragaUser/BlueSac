const path = require('path');
const mongoose = require('mongoose');

const Role = require(path.resolve(__dirname, './models/roleModel'));
const Person = require(path.resolve(__dirname, './models/personModel'));
const { dbUrl } = require(path.resolve(__dirname, '../../config/config'));
const Discussion = require(path.resolve(__dirname, './models/discussionModel'));

let dbHandler = {};

dbHandler.read = read;
dbHandler.create = create;
dbHandler.update = update;
dbHandler.connect = connect;
dbHandler.deleteMany = deleteMany;
dbHandler.closeConnection = closeConnection;

const MODELS = {
    "Role": Role,
    "Discussion": Discussion,
    "Person": Person
};

async function connect() {
    if(!dbHandler.dbConn) {
        dbHandler.dbConn = mongoose.connect(dbUrl, { useNewUrlParser: true }).then(() => {
            console.log("connected to mongodb")
        }).catch(err => {
            console.log(err)
        });
    }
}

function create(obj) {
    return new Promise((resolve, reject) => {
        obj.save((err, doc) => {
            if(err) resolve({status: 500, message: err});
            else resolve({status: 200, message: 'object has been saved to db', doc: doc});
        });
    });
}

function read(modelName, filter = {}) {
    return new Promise((resolve, reject) => {
        MODELS[modelName].find(filter, (err, docs) => {
            if (err) resolve({status: 500, message: err});
            resolve({status: 200, docs: docs});
        })
    })
}

function update(modelName, filter, obj) {
    return new Promise((resolve, reject) => {
        MODELS[modelName].updateMany(filter, obj, (err, docs) => {
            if (err) resolve({status: 500, message: err});
            resolve({status: 200, message: 'docs has been updated!', docs: docs});
        })
    })
}

function deleteMany(modelName, filter) {
    return new Promise((resolve, reject) => {
        MODELS[modelName].deleteMany(filter, (err, docs) => {
            if (err) resolve({status: 500, message: err});
            resolve({status: 200, message: 'docs has been deleted!', docs: docs});
        })
    })
}

function closeConnection() {
    mongoose.disconnect().then(() => {
        console.log("connection to db has been closed!");
        dbHandler.dbConn = undefined;
    });
}

connect();

module.exports = dbHandler;
