import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { ALL_FILM_FIELDS } from "../../graphql/fragments";
import { IFilm } from "../../interfaces/interfaces";

import DefaultLayout from "../../layouts/default";
import Head from "next/head";
import Card from "../../components/Card/card";

interface FilmPageProps {
    film: IFilm
}

const FilmPage: React.FC<FilmPageProps> = ({ film }) => {
    return <DefaultLayout>
        <Head>
            <title>LIGHTFILMS : { film.title }</title>
            <meta name="description" content={`${ film.title }. Читать о ${ film.title } ${ film.year } ${ film.countries[0] } ${ film.producedBy }. LIGHTFILMS. Film about ${ film.briefAbout } `} />
        </Head>
        <div id="grid-wrap">
            <section id="left">
                <article id="text__header">
                    <h2>{ film.title }</h2>
                    <h4>
                        Genres: <i> { film.genres[0] }
                            {`${ film.genres[1] !== undefined ? `, ${ film.genres[1] }. `: ". "}`}
                            </i>
                        Countries: <i>{`${film.countries[0]}${film.countries[1] !== undefined ? `, ${film.countries[1]}`: ""}`}</i>.
                        Director: <i>{ film.producedBy }</i>.
                    </h4>
                    <p>{ film.briefAbout }</p>
                </article>
                <img id="collage" src = { film.collage } alt = {`film ${ film.title } collage`} />
                <div id="about">
                    <h5>What about?</h5>
                    <p>{ film.about.paragraphs[0] }</p>
                    <img src={ film.coverIMG } alt={`Film ${ film.title } image`}/>
                    {
                        film.about.paragraphs
                        .filter((p, i) => { return i > 0 })
                        .map( (p, i) => {
                            return <p key = {i} >
                                {p}
                            </p>
                        } )
                    }
                </div>
            </section>
            <section id="right">
                <div className="prod">
                    <h5 className="producerName">Producer</h5>
                    <Card 
                        HREF    = "/person/[id]"
                        AS      = {`/person/${ film.producer.id }`}
                        ALT     = {`Producer | Director ${film.producer.h3} ${film.producer.h6bot} ${film.producer.h6top}`}

                        img     = { film.producer.imgs[0] }
                        img2    = { film.producer.imgs[1] }
                        h3      = { film.producer.h3 }
                        h6bot   = { film.producer.h6bot }
                        h6top   = { film.producer.h6top }
                        type    = "double"
                    />
                </div>
                <section id="acters-grid">
                    <h5>MAIN ACTERS</h5>
                    <div id="acters">
                    {
                        film.acters.map( (acter) => {
                            return <Card 
                                key     = { acter.id }
                                HREF    = "/person/[id]"
                                AS      = { `/person/${acter.id}` }
                                ALT     = { `Acter ${acter.h3} ${acter.h6bot} ${acter.h6top}` }

                                img     = { acter.imgs[0] }
                                img2    = { acter.imgs[1] }
                                h3      = { acter.h3 }
                                h6bot   = { acter.h6bot }
                                h6top   = { acter.h6top }
                                type    = "double"
                            />
                        } )
                    }
                    </div>
                </section>
            </section>
        </div>
    </DefaultLayout>
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

            const client = new ApolloClient({
                uri: process.env.PROD_GRAPHQL_SERVER,
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

            const client = new ApolloClient({
                uri: process.env.PROD_GRAPHQL_SERVER,
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
            console.log(`Err: ${err}`)
        }
    }
}

export default FilmPage;