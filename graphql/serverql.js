const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");

let PORT = 3008;

const SCHEMAGQL = readFileSync(`${__dirname}/schema.gql`, { encoding: "utf8" })

const data = require("../data/data.json")

let schema = buildSchema(SCHEMAGQL);

let root = {

    getAllFilms: () => {
        return data.films;
    },
    getAllPersons: () => {
        return data.persons;
    },

    getProducers: () => {
        return data.persons.filter( (p) => { return p.type === "producer" } )
    },
    getActers: () => {
        return data.persons.filter( (p) => { return p.type === "acter" } )
    },

    getPerson: (params) => {
        return data.persons.find( ( {id} ) => { return id === params.id } )
    }
    ,
    getFilm: (params) => {
        return data.films.find( ( {id} ) => { return id === params.id } )
    },
    getAllTimes: (params) => {
        return data.times;
    },
    getTime: (params) => {
        return data.times.find( ( {id} ) => { return id === params.id } )
    }
    
};

const app = express();

app.use("/", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(PORT);
console.log('GraphQL API server running at localhost: ' + PORT);