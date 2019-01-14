const mongoose = require('mongoose');

const Role = require('./models/roleModel');
const Discussion = require('./models/discussionModel');

let dbUrl = 'mongodb://sean1515:seand1515@ds233323.mlab.com:33323/bluesac';
let mongoDB = process.env.MONGODB_URI || dbUrl;

let dbHandler = {};

dbHandler.connect = connect;
dbHandler.create = create;
dbHandler.read = read;
dbHandler.update = update;
dbHandler.deleteMany = deleteMany;

const MODELS = {
    "Role": Role,
    "Discussion": Discussion
};

function connect() {
    dbHandler.db = mongoose.connect(mongoDB).then(() => {
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

module.exports = dbHandler;