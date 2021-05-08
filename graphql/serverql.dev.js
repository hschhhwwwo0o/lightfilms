const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");

// DATA
const films = require("../data/films.json");
const persons = require("../data/persons.json");
const times = require("../data/times.json");

// SCHEMA
const SCHEMAGQL = readFileSync(`${__dirname}/schema.gql`, { encoding: "utf8" });
let schema = buildSchema(SCHEMAGQL);

//PORT
const PORT = 3008;

let root = {

    getAllFilms: () => {
        return films;
    },
    getAllPersons: () => {
        return persons;
    },

    getProducers: () => {
        return persons.filter( (p) => { return p.type === "producer" } )
    },
    getActers: () => {
        return persons.filter( (p) => { return p.type === "acter" } )
    },

    getPerson: (params) => {
        return persons.find( ( {id} ) => { return id === params.id } )
    }
    ,
    getFilm: (params) => {
        return films.find( ( {id} ) => { return id === params.id } )
    },
    getAllTimes: (params) => {
        return times;
    },
    getTime: (params) => {
        return times.find( ( {id} ) => { return id === params.id } )
    }
    
};

const app = express();

app.use("/", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(PORT);