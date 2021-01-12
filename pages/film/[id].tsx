
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { ALL_FILM_FIELDS } from "../../graphql/fragments";
import { IFilm } from "../../interfaces/interfaces";

import Head from "next/head";
import Header from "../../components/Header/header";

interface FilmPageProps {
    film: IFilm
}

const FilmPage: React.FC<FilmPageProps> = ( {film} ) => {
    return <>
        <Head>
            <title>LIGHTFILMS : {film.title}</title>
        </Head>
        <Header />
        <h1>
            {
                film.title
            }
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
                    query getFilm {
                        getFilm(id: ${ctx.params.id}) {
                            ...FilmFragment
                    }
                }
                ${ALL_FILM_FIELDS.fragment}
                `
            })

            return {
                props: {
                    film: data.data.getFilm
                }
            }

        } catch(err) {
            console.log(`Err: ${err}`)
        }
    } else if( process.env.MODE === "production" ) {
        try {

            const res: Response = await fetch(`${process.env.PROD_JSON_SERVER}`)
            const data = await res.json();

            const films = await data.films;

            const film = await films.filter( (film) => {
                return film.id === ctx.params.id
            } )

            return {
                props: {
                    film: film[0]
                }
            }

        } catch(err) {
            console.log(`Err: ${err}`)
        }
    }
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
                    query getAllFilms {
                        getAllFilms {
                            id
                    }
                }
                `
            })

            const paths = await data.data.getAllFilms.map( ( {id} ) => {
                return (
                    {
                        params: { id: id }
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
    } else if( process.env.MODE === "production" ) {
        try{

            const res: Response = await fetch(`${process.env.PROD_JSON_SERVER}`);
            const data = await res.json();

            const films = await data.films;

            const paths = await films.map( (film) => {
                return (
                    {
                        params: { id: film.id }
                    }
                )
            } )

            return {
                paths,
                fallback: false
            }

        } catch(err) {
            console.log(`Err: ${err}`)
        }
    }
}

export default FilmPage;