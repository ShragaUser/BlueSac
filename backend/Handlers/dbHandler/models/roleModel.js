const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = Schema(
    {
        roleID: Number,
        name: String,
    }
);

module.exports = mongoose.model('Role', roleSchema);