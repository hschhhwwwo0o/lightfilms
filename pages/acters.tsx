import { GetStaticProps } from "next";

import Header from "../components/Header/header"
import Card from "../components/Card/card";

import { __QL } from "../test/__ql"
import { ICard } from "../interfaces/interfaces"

interface ActersPageProps {
    cards?: ICard[]
}

const ActersPage: React.FC<ActersPageProps> = ( {cards} ) => {
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
                cards.map( (acter) => {
                    return (
                        <Card 
                            key = {acter.id} 
                            id = {acter.id} 
                            HREF = {`/person/[id]`}
                            AS = {`/person/${acter.id}`}
                            h3 = { acter.h3 }
                            h6bot = { acter.h6bot }
                            h6top = { acter.h6top }
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
            const res: Response = await fetch(`${process.env.DEV_JSON_SERVER}/persons?type=acter`);
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

            const acters = await data.persons.filter( (person) => {
                return person.type == "acter"
            })

            const cards = __QL(acters)

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

export default ActersPage;