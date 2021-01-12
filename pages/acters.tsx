import { GetStaticProps } from "next";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { GET_ACTERS } from "../graphql/queries";

import Header from "../components/Header/header";
import Card from "../components/Card/card";

import { __QLPersons } from "../utils/__ql";
import { IPersonCard } from "../interfaces/interfaces";

interface ActersPageProps {
    acters: IPersonCard[]
}

const ActersPage: React.FC<ActersPageProps> = ( {acters} ) => {
    return <>
        <Header />
        <section id="header-choose">
            <h1>ACTERS</h1>
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
                acters.map( (acter) => {
                    return (
                        <Card 
                            key = {acter.id} 
                            HREF = {`/person/[id]`}
                            AS = {`/person/${acter.id}`}
                            h3 = { acter.name }
                            h6bot = { acter.countries[0] }
                            h6top = { acter.title }
                            img = { acter.imgs[0] }
                            img2 = { acter.imgs[1] }
                            type = "double"
                        />
                    )
                } )
            }
        </section>
    </>
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
            console.log( `Err: ${err}` )
        }

    } else if ( process.env.MODE === "production" ) {

        try {
            const res: Response = await fetch(`${process.env.PROD_JSON_SERVER}`);
            const data = await res.json()

            const acters = __QLPersons( data.persons.filter( (person) => {
                return person.type == "acter"
            } ) )

            return {
                props: {
                    acters
                }
            }
        } catch(err) {
            console.log( `Err: ${err}` )
        }

    }
}

export default ActersPage;