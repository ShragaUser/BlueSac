const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
// GraphQL schema
const schema = buildSchema(`
    type Query {
        soldier(army_id: Int!): Soldier
    },
    type Soldier {
        army_id: Int
        first_name: String
    }
`);

const soldiersData = [
    {
        army_id: 1,
        first_name: 'shon daniel'
    },
    {
        army_id: 2,
        first_name: 'shahar zamir'
    },
    {
        army_id: 3,
        first_name: 'aviv barel'
    }
]
const getSoldier = function(args) {
    var army_id = args.army_id;
    return soldiersData.filter(soldier => {
        return soldier.army_id == army_id;
    })[0];
}

const root = {
    soldier: getSoldier
};
// Create an express server and a GraphQL endpoint
const app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));