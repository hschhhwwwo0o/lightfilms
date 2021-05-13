import { GetStaticProps } from "next";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useState } from "react";

import { GET_ALL_FILMS } from "../graphql/queries";
import { IFilmCard } from "../interfaces";

import { __QLFilms } from "../assets/utils/__ql";
import { __filterFilms } from "../assets/utils/__filter";

import DefaultLayout from "../layouts/default";
import Meta from "../components/Meta";
import Chooser from "../components/Chooser";
import Grid from "../components/Grid";
import Card from "../components/Card";

interface IndexPageProps {
    films: IFilmCard[]
}

const IndexPage: React.FC<IndexPageProps> = ({ films }) => {

    const [genre, setGenre] = useState("all")
    const [year, setYear]   = useState("all")

    return <DefaultLayout>

        <Meta 
            titleShort  = "LIGHTFILMS"
            titleLong   = "LIGHTFILMS - Learn more about great movies & persons"
            description = "LIGHTFILMS is a website for fans of old and high-quality movies. Here you will find the best movies of the past time. There is a collection of more than 30 films from popular to avant-garde."
            url         = "https://lightfilms-ssandry.vercel.app/"
            keywords    = "LIGHTFILMS, Movies in black and white, Retro movies, Classics of cinematograph, cinematography, black and white movies, Full-length cinema, Fiction cinema, History cinema, LIGHT FILMS, Light Films"
        />
        
        <Chooser h1="CINEMA">
            <ul id="countrys">
                <li 
                    onClick     = { () => { setGenre("all") } } 
                    className   = { genre === "all" ? "sq sq_bright" : "sq" }
                >
                </li>
                <li onClick={ () => { setGenre("Drama") }} className={ genre === "Drama" ? "bright" : ""  }>Drama</li>
                <li onClick={ () => { setGenre("Romance") }} className={ genre === "Romance" ? "bright" : ""  }>Romance</li>
                <li onClick={ () => { setGenre("Action") }} className={ genre === "Action" ? "bright" : ""  }>Action</li>
                <li onClick={ () => { setGenre("Comedy") }} className={ genre === "Comedy" ? "bright" : ""  }>Comedy</li>
                <li onClick={ () => { setGenre("Mystery") }} className={ genre === "Mystery" ? "bright" : ""  }>Mystery</li>
                <li onClick={ () => { setGenre("History") }} className={ genre === "History" ? "bright" : ""  }>History</li>
            </ul>
            <ul id="years">
                <li onClick={ () => { setYear("all") }} className={ year === "all" ? "sq sq_bright" : "sq"  }></li>
                <li onClick={ () => { setYear("1950") } } className={ year === "1950" ? "bright" : ""  }>50’s</li>
                <li onClick={ () => { setYear("1960") } } className={ year === "1960" ? "bright" : ""  }>60’s</li>
                <li onClick={ () => { setYear("1970") } } className={ year === "1970" ? "bright" : ""  }>70’s</li>
                <li onClick={ () => { setYear("1980") } } className={ year === "1980" ? "bright" : ""  }>80’s</li>
            </ul>
        </Chooser>

        <Grid>
            {
                __filterFilms( [genre, year], films).map( (film, key) => {
                    return (
                        <Card
                            HREF    = {`/film/[id]`}
                            AS      = {`/film/${film.id}`}
                            ALT     = {`Film ${film.title} ${film.producedBy}. ${film.year}. ${film.genres[0]}`}
                            key     = { key }

                            h3      = { film.title }
                            h6top   = { film.producedBy }
                            h6bot   = { film.countries[0] }
                            img     = { film.coverIMG }
                            type    = "single"
                        />
                    )
                })
            }
        </Grid>
    </DefaultLayout>
}

export const getStaticProps: GetStaticProps = async ctx => {

    if( process.env.MODE === "development" ) {
        try {
            const client = new ApolloClient({
                uri: process.env.DEV_GRAPHQL_SERVER,
                cache: new InMemoryCache()
            });

            const { data } = await client.query({ query: GET_ALL_FILMS });
            
            return {
                props: {
                    films: data.getAllFilms
                }
            }
    
        } catch(err) {
            throw new Error(`Error: ${err}`);
        }
    } else if( process.env.MODE === "production" ) {
        try {
            const client = new ApolloClient({
                uri: process.env.PROD_GRAPHQL_SERVER,
                cache: new InMemoryCache()
            });

            const { data } = await client.query({ query: GET_ALL_FILMS });
            
            return {
                props: {
                    films: data.getAllFilms
                }
            }
            
        } catch(err) {
            throw new Error(`Error: ${err}`);
        }
    } else {
        throw new SyntaxError(`The MODE is written incorrectly. Check the syntax in .env`);
    }
}

export default IndexPage;