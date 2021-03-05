import { GetStaticProps } from "next";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useState } from "react";

import { GET_PRODUCERS } from "../graphql/queries";
import { IPersonCard } from "../interfaces/interfaces";

import { __QLPersons } from "../assets/utils/__ql";
import { __filterPersons } from "../assets/utils/__filter";

import DefaultLayout from "../layouts/default";
import Head from "next/head";
import Card from "../components/Card/card";

interface ProducersPageProps {
    producers: IPersonCard[]
}

const ProducersPage: React.FC<ProducersPageProps> = ( { producers } ) => {

    const [country, setCountry] = useState("all")
    const [year, setYear]       = useState("all")

    return <DefaultLayout>
        <Head>
            <title>LIGHTFILMS : Producers</title>
            <meta name="description" content={`The best producers, directors of the last century. Read the biography of the best directors, about their works. LIGHTFILMS. Biographies of directors. ${producers[0].name}, ${producers[1].name}, ${producers[2].name} `} />
        </Head>
        <section id="header-choose">
            <h1>PRODUCERS</h1>
            <div id="chooser">
                <ul id = "countrys">
                    <li 
                        onClick = {() => { setCountry("all") }} 
                        className = { country === "all" ? "sq sq_bright" : "sq"  }
                    >
                    </li>
                    <li onClick = { () => { setCountry("Japan") } } className = { country === "Japan" ? "bright" : ""  } >Japan</li>
                    <li onClick = { () => { setCountry("France") } } className = { country === "France" ? "bright" : ""  }>France</li>
                    <li onClick = { () => { setCountry("Russia") } } className = { country === "Russia" ? "bright" : ""  }>Russia</li>
                    <li onClick = { () => { setCountry("USA") } } className = { country === "USA" ? "bright" : ""  }>USA</li>
                    <li onClick = { () => { setCountry("British") } } className = { country === "British" ? "bright" : ""  }>British</li>
                    <li onClick = { () => { setCountry("Germany") } } className = { country === "Germany" ? "bright" : ""  }>Germany</li>
                </ul>
                <ul id = "years">
                    <li onClick = {() => { setYear("all") }} className = { year === "all" ? "sq sq_bright" : "sq"  }></li>
                    <li onClick = {() => { setYear("1950") }} className = { year === "1950" ? "bright" : ""  }>50’s</li>
                    <li onClick = {() => { setYear("1960") }} className = { year === "1960" ? "bright" : ""  }>60’s</li>
                    <li onClick = {() => { setYear("1970") }} className = { year === "1970" ? "bright" : ""  }>70’s</li>
                    <li onClick = {() => { setYear("1980") }} className = { year === "1980" ? "bright" : ""  }>80’s</li>
                </ul>
            </div>
        </section>
        <section id="grid-posts">
            {
                __filterPersons( [country, year], producers ).map( (producer) => {
                    return (
                        <Card 
                            key = {producer.id} 
                            HREF = {`/person/[id]`}
                            AS = {`/person/${producer.id}`}
                            h3 = { producer.name }
                            h6bot = { producer.countries[0] }
                            h6top = { producer.title }
                            img = { producer.imgs[0] }
                            img2 = { producer.imgs[1] }
                            type = "double"
                        />
                    )
                } )
            }
        </section>
    </DefaultLayout>
}

export const getStaticProps: GetStaticProps = async ctx => {

    if( process.env.MODE === "development" ) {
        try {

            const client = new ApolloClient({
                uri: process.env.DEV_GRAPHQL_SERVER,
                cache: new InMemoryCache()
            })

            const { data } = await client.query({ query: GET_PRODUCERS })

            return {
                props: {
                    producers: data.getProducers
                }
            }

        } catch(err) {
            throw new Error(`Error: ${err}`);
        }
    } else if ( process.env.MODE === "production" ) {
        try {

            const client = new ApolloClient({
                uri: process.env.PROD_GRAPHQL_SERVER,
                cache: new InMemoryCache()
            })

            const { data } = await client.query({ query: GET_PRODUCERS })

            return {
                props: {
                    producers: data.getProducers
                }
            }

        } catch(err) {
            throw new Error(`Error: ${err}`);
        }
    } else {
        throw new SyntaxError(`The MODE is written incorrectly. Check the syntax in .env`);
    }
}

export default ProducersPage;