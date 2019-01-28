const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = require(path.resolve(__dirname, './personModel'));

const discussionRoles = Schema(
    {
        role: {type: Schema.Types.ObjectId, ref: 'Role'},
        discussion_people: [{type: Schema.Types.ObjectId, ref: 'People'}]
    }
);

const discussionSchema = Schema(
    {
        name: String,
        date: Date,
        discussion_roles: [discussionRoles]
    }
);

module.exports = mongoose.model('Discussion', discussionSchema);