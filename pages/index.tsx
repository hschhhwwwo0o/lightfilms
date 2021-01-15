import { GetStaticProps } from "next";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useState } from "react";

import { GET_ALL_FILMS } from "../graphql/queries";
import { IFilmCard } from "../interfaces/interfaces";

import { __QLFilms } from "../utils/__ql";
import { __filterFilms } from "../utils/__filter";

import Head from "next/head";
import Header from "../components/Header/header";
import Card from "../components/Card/card";
import Footer from "../components/Footer/index";

interface IndexPageProps {
    films: IFilmCard[]
}

const IndexPage: React.FC<IndexPageProps> = ( { films } ) => {

    const [genre, setGenre] = useState("all")
    const [year, setYear]   = useState("all")

    return <>
        <Head>
            <title>LIGHTFILMS</title>
        </Head>
        <Header />
        <section id="header-choose">
            <h1>CINEMA</h1>
            <div id="chooser">
                <ul id = "countrys">
                    <li 
                        onClick = {() => { setGenre("all") }} 
                        className = { genre === "all" ? "sq sq_bright" : "sq"  }
                    >
                    </li>
                    <li onClick = {() => { setGenre("Drama") }} className = { genre === "Drama" ? "bright" : ""  } >Drama</li>
                    <li onClick = {() => { setGenre("Romance") }} className = { genre === "Romance" ? "bright" : ""  }>Romance</li>
                    <li onClick = {() => { setGenre("Action") }} className = { genre === "Action" ? "bright" : ""  }>Action</li>
                    <li onClick = {() => { setGenre("Comedy") }} className = { genre === "Comedy" ? "bright" : ""  }>Comedy</li>
                    <li onClick = {() => { setGenre("Mystery") }} className = { genre === "Mystery" ? "bright" : ""  }>Mystery</li>
                    <li onClick = {() => { setGenre("History") }} className = { genre === "History" ? "bright" : ""  }>History</li>
                </ul>
                <ul id = "years">
                    <li onClick = {() => { setYear("all") }} className = { year === "all" ? "sq sq_bright" : "sq"  }></li>
                    <li onClick = { () => { setYear("1950") } } className = { year === "1950" ? "bright" : ""  } >50’s</li>
                    <li onClick = { () => { setYear("1960") } } className = { year === "1960" ? "bright" : ""  } >60’s</li>
                    <li onClick = { () => { setYear("1970") } } className = { year === "1970" ? "bright" : ""  } >70’s</li>
                    <li onClick = { () => { setYear("1980") } } className = { year === "1980" ? "bright" : ""  } >80’s</li>
                </ul>
            </div>
        </section>
        <section id="grid-posts">
            {
                __filterFilms([genre, year], films).map( (film) => {
                    return (
                        <Card 
                            key = {film.id} 

                            HREF = {`/film/[id]`}
                            AS = {`/film/${film.id}`}

                            h3 = { film.title }
                            h6top = { film.producedBy }
                            h6bot = { film.countries[0] }
                            img = {film.coverIMG}
                            type = "single"
                        />
                    )
                } )
            }
        </section>
        <Footer />
    </>
}

export const getStaticProps: GetStaticProps = async ctx => {

    if( process.env.MODE === "development" ) {
        try {

            const client = new ApolloClient({
                uri: process.env.DEV_GRAPHQL_SERVER,
                cache: new InMemoryCache()
            })

            const { data } = await client.query({ query: GET_ALL_FILMS })
            
            return {
                props: {
                    films: data.getAllFilms
                }
            }
    
        } catch(err) {
            console.log( `Err: ${err}` )
        }
    } else if( process.env.MODE === "production" ) {
        try {
    
            const res: Response = await fetch(`${process.env.PROD_JSON_SERVER}`)
            const data = await res.json();
            const films = await __QLFilms(data.films)
            
            return {
                props: {
                    films
                }
            }
    
        } catch(err) {
            console.log( `Err: ${err}` )
        }
    } else {
        console.log( "NODE_ENV undefined" )
    }
}

export default IndexPage;