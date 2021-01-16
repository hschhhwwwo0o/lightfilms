const express = require('express');
const { buildSchema } = require('graphql');
const {graphqlHTTP} = require('express-graphql');
let port = 3008;

const data = require("../data/data.json")

let schema = buildSchema(`

    type Card {
        id: ID!
        h3: String!
        h6top: String!
        h6bot: String!

        img: String
        imgs: [String]
    }

    type About {
        img: String
        paragraphs: [String]
    }

    type About2 {
        mostPopularFilm: Card!
        paragraphs: [String]
    }

    type Film {
        id: ID!
        title: String!
        producedBy: String!
        coverIMG: String!
        genres: [String]
        countries: [String]
        year: String!
        producer: Card!
        collage: String!
        briefAbout: String!
        about: About!
        acters: [Card]!
    }

    type Person {
        id: ID!
        name: String!
        title: String!
        countries: [String]!
        imgs: [String]!
        type: String!
        about: About2!
        briefAbout: String!
        filmography: [Card]!
        yearsPopular: [String]!
    }

    type timeSections {
        title: String!
        p: [String]
    }

    type Time {
        id: ID!
        title: String!
        sections: [timeSections]!
        bestMovies: [Card]!
    }

    type Query {
        getAllFilms: [Film]!
        getAllPersons: [Person]!

        getProducers: [Person]!
        getActers: [Person]!

        getPerson(id: ID!): Person!
        getFilm(id: ID!): Film!

        getTime(id: ID!): Time!
        getAllTimes: [Time]!
    }

`);

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

app.listen(port);
console.log('GraphQL API server running at localhost: ' + port);