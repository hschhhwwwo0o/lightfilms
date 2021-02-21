# GraphQL API in project

## Run API

```sh
$npm run gql # or yarn gql
```

После чего мы увидим в `cmd`

```sh
$DEV_GRAPHQL_SERVER=http://localhost:3008
```

## Queries 

Example GraphQL query

```js
export const GET_ALL_FILMS = gql`
    query getAllFilms {
        getAllFilms {
            id
            title
            producedBy
            coverIMG
            countries
            genres
        }
    }
`
```

## Fragments 

A GraphQL fragment is a piece of logic that a client can share between multiple queries and mutations.

Here, we declare a NameParts fragment that can be used with any Person object:

```js
fragment NameParts on Person {
    firstName
    lastName
}
```

### Reusing fragments

Declare Fragment

```js
import { gql } from "@apollo/client";

export const ALL_PERSON_FIELDS = {
    fragment: gql`
        fragment PersonFragment on Person {
            id
            name
            title
        }
    `
}
```

Reusing fragment

```js
query: gql`
        query getPerson {
            getPerson(id: ${ctx.params.id}) {
                ...PersonFragment
        }
    }
${ALL_PERSON_FIELDS.fragment}
`
```

# Useful documentation

- **https://habr.com/ru/post/424199/**
- **https://www.apollographql.com/docs/react/data/queries/**
- **https://www.apollographql.com/docs/react/data/fragments/**