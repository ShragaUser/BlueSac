const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discussionSchema = Schema(
    {
        discussionID: Number,
        name: String,
    }
);

module.exports = mongoose.model('Discussion', discussionSchema);