import { GetStaticProps } from "next";

import Header from "../components/Header/header"
import Card from "../components/Card/card";

import { __QL } from "../test/__ql"
import { ICard } from "../interfaces/interfaces"

interface ProducersPageProps {
    cards?: ICard[]
}

const ProducersPage: React.FC<ProducersPageProps> = ( {cards} ) => {
    return <>
        <Header />
        <section id="header-choose">
            <h1>PRODUCERS</h1>
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
                cards.map( (producer) => {
                    return (
                        <Card 
                            key = {producer.id} 
                            id = {producer.id} 
                            href = {`person/${producer.id}`}
                            h3 = { producer.h3 }
                            h6bot = { producer.h6bot }
                            h6top = { producer.h6top }
                            img = { producer.imgs[0] }
                            img2 = { producer.imgs[1] }
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
            const res: Response = await fetch(`${process.env.DEV_JSON_SERVER}/persons?type=producer`);
            const data = await res.json()

            const cards = __QL( data )

            return {
                props: {
                    cards
                }
            }
        } catch(err) {
            console.log( `Err: ${err}` )
        }

    } else if ( process.env.MODE === "production" ) {

        try {
            const res: Response = await fetch(`${process.env.PROD_JSON_SERVER}`);
            const data = await res.json()

            const producers = await data.persons.filter( (person) => {
                return person.type == "producer"
            })

            const cards = __QL(producers)

            return {
                props: {
                    cards
                }
            }
        } catch(err) {
            console.log( `Err: ${err}` )
        }

    }
}

export default ProducersPage;