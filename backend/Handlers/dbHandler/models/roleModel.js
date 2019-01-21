const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = Schema(
    {
        name: String,
        unit: String,
        rank: Number,
        description: String,
        requirements: String,
        skills: String,
        approved_by: String,
        approved_at: Date
    }
);

module.exports = mongoose.model('Role', roleSchema);