import { GetStaticProps } from "next";

import Header from "../components/Header/header"
import Card from "../components/Card/card";

import { __QL } from "../test/__ql"
import { ICard } from "../interfaces/interfaces"

interface IndexPageProps {
    cards?: ICard[]
}

const IndexPage: React.FC<IndexPageProps> = ( {cards} ) => {
    return <>
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
                cards.map( (film) => {
                    return (
                        <Card 
                            key = {film.id} 
                            id = {film.id} 
                            HREF = {`/film/[id]`}
                            AS = {`/film/${film.id}`}
                            h3 = { film.h3 }
                            h6bot = { film.h6bot }
                            h6top = { film.h6top }
                            img = {film.img}
                            type = "single"
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
    
            const res: Response = await fetch(`${process.env.DEV_JSON_SERVER}/films`)
            const data = await res.json();
            const cards = await __QL(data);
            
            return {
                props: {
                    cards
                }
            }
    
        } catch(err) {
            console.log( `Err: ${err}` )
        }
    } else if( process.env.MODE === "production" ) {
        try {
    
            const res: Response = await fetch(`${process.env.PROD_JSON_SERVER}`)
            const data = await res.json();
            const cards = await __QL(data.films)
            
            return {
                props: {
                    cards
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