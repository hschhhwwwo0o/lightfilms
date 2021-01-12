import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { ALL_PERSON_FIELDS } from "../../graphql/fragments";
import { IPerson } from "../../interfaces/interfaces";

import Head from "next/head";
import Header from "../../components/Header/header";

interface PersonPageProps {
    person: IPerson
}

const PersonPage: React.FC<PersonPageProps> = ( {person} ) => {
    return <>
        <Head>
            <title>LIGHTFILMS BIO : {person.name}</title>
        </Head>
        <Header />
        <h1>
            { person.name }
        </h1>
    </>
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {

    if( process.env.MODE === "development" ) {
        try {

            const client = new ApolloClient({
                uri: process.env.DEV_GRAPHQL_SERVER,
                cache: new InMemoryCache()
            })

            const data = await client.query({
                query: gql`
                    query getPerson {
                        getPerson(id: ${ctx.params.id}) {
                            ...PersonFragment
                    }
                }
                ${ALL_PERSON_FIELDS.fragment}
                `
            })

            return {
                props: {
                    person: data.data.getPerson
                }
            }

        } catch(err) {
            console.log( `Err: ${err}` )
        }
    } else if( process.env.MODE === "production" ) {
        try {

            const res: Response = await fetch(`${process.env.PROD_JSON_SERVER}`)
            const data = await res.json()

            const person = await data.persons.filter( (person) => {
                return person.id === ctx.params.id
            } )

            return {
                props: {
                    person: person[0]
                }
            }

        } catch(err) {
            console.log( `Err: ${err}` )
        }
    }

    return null
}

export const getStaticPaths: GetStaticPaths = async ctx => {

    if( process.env.MODE === "development" ) {
        try {
            
            const client = new ApolloClient({
                uri: process.env.DEV_GRAPHQL_SERVER,
                cache: new InMemoryCache()
            })

            const data = await client.query({
                query: gql`
                    query getAllPersons {
                        getAllPersons {
                            id
                    }
                }
                `
            })

            const paths = await data.data.getAllPersons.map( ( {id} ) => {
                return (
                    {
                        params: { id: id }
                    }
                )
            } )

            return { paths, fallback: false }

        } catch(err) {
            console.log( `Err: ${err}` )
        }
        
    } else if( process.env.MODE === "production" ) {

        try {
            const res: Response = await fetch(`${process.env.PROD_JSON_SERVER}`)
            const data = await res.json()
            const persons = await data.persons;
    
            const paths = persons.map( (person) => {
                return (
                    {
                        params: { id: person.id }
                    }
                )
            } )
    
            return {
                paths,
                fallback: false
            }
        } catch(err) {
            console.log( `Err: ${err}` )
        }
    }
}

export default PersonPage;