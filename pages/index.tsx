import { GetStaticProps } from "next";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { GET_ALL_FILMS } from "../graphql/queries"

import Head from "next/head"
import Header from "../components/Header/header";
import Footer from "../components/Footer/index"
import Card from "../components/Card/card";

import { __QLFilms } from "../utils/__ql";
import { IFilmCard } from "../interfaces/interfaces";

interface IndexPageProps {
    films: IFilmCard[]
}

const IndexPage: React.FC<IndexPageProps> = ( {films} ) => {
    return <>
        <Head>
            <title>LIGHTFILMS</title>
        </Head>
        <Header />
        <section id="header-choose">
            <h1>CINEMA</h1>
            <div id="chooser">
                <ul id = "countrys">
                    <li>JAPAN</li>
                    <li>FRANCE</li>
                    <li>RUSSIA</li>
                    <li>USA</li>
                    <li>BRITISH</li>
                    <li>GERMANY</li>
                    <li>ITALIAN</li>
                </ul>
                <ul id = "years">
                    <li>50’s</li>
                    <li>60’s</li>
                    <li>70’s</li>
                    <li>80’s</li>
                    <li>90’s</li>
                </ul>
            </div>
        </section>
        <section id="grid-posts">
            {
                films.map( (film) => {
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