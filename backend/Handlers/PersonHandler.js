const path = require('path');

const { People } = require(path.resolve(__dirname, '../people'));

PersonHandler = {};
PersonHandler.find = find;

function find(idArr) {
    let idArray = Array.isArray(idArr) ? idArr : [idArr];
    console.log(idArray);
    return People.filter(person => idArray.includes(person.id));
}

module.exports = PersonHandler;