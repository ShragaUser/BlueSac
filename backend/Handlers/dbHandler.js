const mongoose = require('mongoose');

let dbUrl = 'mongodb://sean1515:seand1515@ds233323.mlab.com:33323/bluesac';
let mongoDB = process.env.MONGODB_URI || dbUrl;

let dbHandler = {};

dbHandler.connect = connect;
dbHandler.create = create;
dbHandler.read = read;
dbHandler.update = update;
dbHandler.deleteMany = deleteMany;

function connect() {
    dbHandler.db = mongoose.connect(mongoDB).then(() => {
        console.log("connected to mongodb")
    }).catch(err => {
        console.log(err)
    });
}

function create(obj) {
    obj.save(err => {
        if(err) return err;
        return 'object has been saved to db'
    })
}

function read(collection, filter = {}) {
    collection.find(filter, (err, docs) => {
        if(err) return err;
        return docs;
    })
}

function update(collection, filter) {
    collection.update(filter, (err, docs) => {
        if(err) return err;
        return 'docs has been updated!'
    })
}

function deleteMany(collection, filter) {
    collection.deleteMany(filter, (err, doc) => {
        if(err) return err;
        return 'docs has been deleted!';
    })
}

module.exports = dbHandler;