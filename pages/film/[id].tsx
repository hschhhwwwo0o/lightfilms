
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import Head from "next/head";
import { IFilm } from "../../interfaces/interfaces";

import Header from "../../components/Header/header"

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

            const res: Response = await fetch(`${process.env.DEV_JSON_SERVER}/films?id=${ctx.params.id}`)
            const film = await res.json();

            return {
                props: {
                    film: film[0]
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

            const res: Response = await fetch(`${process.env.DEV_JSON_SERVER}/films`)
            const films: IFilm[] = await res.json()

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