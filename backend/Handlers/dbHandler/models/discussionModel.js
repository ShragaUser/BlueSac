const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = require(path.resolve(__dirname, './personModel'));

const discussionJobs = Schema(
    {
        job: {type: Schema.Types.ObjectId, ref: 'People'},
        discussion_people: [Person]
    }
);

const discussionSchema = Schema(
    {
        name: String,
        date: Date,
        discussion_roles: [discussionJobs]
    }
);

module.exports = mongoose.model('Discussion', discussionSchema);