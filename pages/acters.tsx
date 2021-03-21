import { GetStaticProps } from "next";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useState } from "react";

import { GET_ACTERS } from "../graphql/queries";
import { IPersonCard } from "../interfaces";

import { __QLPersons } from "../assets/utils/__ql";
import { __filterPersons } from "../assets/utils/__filter";

import Meta from "../components/Meta";
import DefaultLayout from "../layouts/default";
import Chooser from "../components/Chooser";
import Grid from "../components/Grid";
import Card from "../components/Card";

interface ActersPageProps {
    acters: IPersonCard[]
}

const ActersPage: React.FC<ActersPageProps> = ( { acters } ) => {

    const [country, setCountry] = useState("all")
    const [year, setYear]       = useState("all")

    return <DefaultLayout>
        <Meta 
            titleShort  = "LIGHTFILMS : Acters"
            titleLong   = "Read biographies of the greatest movie actors"
            description = {`The best acters, actress of the last century. Read the biography of the best acters. LIGHTFILMS. Biographies of acters. ${acters[0].name}, ${acters[1].name}, ${acters[2].name} `}
            url         = "https://lightfilms-ssandry.vercel.app/acters"
            keywords    = {`The best acters, actress of the last century, biography of the best acters, LIGHTFILMS, Biographies of acters. ${acters[0].name}, ${acters[1].name}, ${acters[2].name} `}
        />
        <Chooser h1="ACTERS">
            <ul id = "countrys">
                <li 
                    onClick = { () => { setCountry("all") }} 
                    className = { country === "all" ? "sq sq_bright" : "sq"  }>
                </li>
                <li onClick = { () => { setCountry("Japan") } } className = { country === "Japan" ? "bright" : ""  } >Japan</li>
                <li onClick = { () => { setCountry("France") } } className = { country === "France" ? "bright" : ""  }>France</li>
                <li onClick = { () => { setCountry("Russia") } } className = { country === "Russia" ? "bright" : ""  }>Russia</li>
                <li onClick = { () => { setCountry("USA") } } className = { country === "USA" ? "bright" : ""  }>USA</li>
                <li onClick = { () => { setCountry("British") } } className = { country === "British" ? "bright" : ""  }>British</li>
                <li onClick = { () => { setCountry("Germany") } } className = { country === "Germany" ? "bright" : ""  }>Germany</li>
            </ul>
            <ul id = "years">
                <li onClick = { () => { setYear("all") }} className = { year === "all" ? "sq sq_bright" : "sq"  }></li>
                <li onClick = { () => { setYear("1950") }} className = { year === "1950" ? "bright" : ""  }>50’s</li>
                <li onClick = { () => { setYear("1960") }} className = { year === "1960" ? "bright" : ""  }>60’s</li>
                <li onClick = { () => { setYear("1970") }} className = { year === "1970" ? "bright" : ""  }>70’s</li>
                <li onClick = { () => { setYear("1980") }} className = { year === "1980" ? "bright" : ""  }>80’s</li>
            </ul>
        </Chooser>
        <Grid>
            {
                __filterPersons( [country, year], acters ).map( (acter) => {
                    return (
                        <Card 
                            key     = { acter.id } 
                            HREF    = { `/person/[id]` }
                            AS      = { `/person/${acter.id}` }
                            ALT     = { `${acter.name}, ${acter.countries[0]}, ${acter.yearsPopular[0]}` }
                            h3      = { acter.name }
                            h6bot   = { acter.countries[0] }
                            h6top   = { acter.title }
                            img     = { acter.imgs[0] }
                            img2    = { acter.imgs[1] }
                            type    = "double"
                        />
                    )
                } )
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
            })

            const { data } = await client.query({ query: GET_ACTERS })

            return {
                props: {
                    acters: data.getActers
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

            const { data } = await client.query({ query: GET_ACTERS })

            return {
                props: {
                    acters: data.getActers
                }
            }

        } catch(err) {
            throw new Error(`Error: ${err}`);
        }
    } else {
        throw new SyntaxError(`The MODE is written incorrectly. Check the syntax in .env`);
    }
}

export default ActersPage;