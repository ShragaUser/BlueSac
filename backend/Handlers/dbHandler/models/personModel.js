const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = Schema(
    {
        first_name: String,
        last_name: String,
        person_id: String,
        process: Number
    }
);

module.exports = mongoose.model('Person', personSchema);