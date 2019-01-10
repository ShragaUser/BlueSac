const { People } = require('../people');

PersonHandler = {};
PersonHandler._find = _find;
PersonHandler.findPerson = findPerson;

function findPerson(id) {
    return People.find(person => {
        console.log(person.id === id);
        return person.id === id
    })
}

function _find(idArr) {
    console.log(idArr);
    let peopleArr = [];
    idArr.forEach(id => {
        console.log(id);
        peopleArr.push(findPerson(id));
    });

    return peopleArr;
}

module.exports = PersonHandler;