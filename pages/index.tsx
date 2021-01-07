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
        <div id="header-choose">
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
        </div>
        <div id="grid-posts">
            <Card 
                id = {"0"} 
                href = {`person/${0}`}
                h3 = "The tree grows in Brooklyn"
                h6bot = "Drama | Romance | 70’s | United States of America" 
                h6top = "Elia Kazan" 
                img = "https://www.whistles.com/on/demandware.static/-/Library-Sites-WHSharedLibrary/default/dwb9112f72/images/inspiration/Stanley-Kubrick-Listing-Image-1152x1440.jpg"
                img2 = "https://image.tmdb.org/t/p/original/4azoknQJpwC6L0ILxgvNgXUuNOr.jpg"
                type = "double"
            />
            <Card 
                id = {"0"} 
                href = {`person/${0}`}
                h3 = "The tree grows in Brooklyn"
                h6bot = "Drama | Romance | 70’s | United States of America" 
                h6top = "Elia Kazan" 
                img = "https://cdn.radiofrance.fr/s3/cruiser-production/2016/12/7cecb3f7-cdbb-4e69-955e-73be7ec7708c/838_godard_portrait_pose.jpg"
                img2 = "https://sun9-33.userapi.com/c628625/v628625702/172b4/jYONZa6pwOs.jpg"
                type = "double"
            />

            {
                cards.map( (film) => {
                    return (
                        <Card 
                            key = {film.id} 
                            id = {film.id} 
                            href = {`person/${film.id}`}
                            h3 = { film.h3 }
                            h6bot = { film.h6bot }
                            h6top = { film.h6top }
                            img = {film.img}
                            type = "single"
                        />
                    )
                } )
            }
        </div>
    </>
}

export const getStaticProps: GetStaticProps = async ctx => {

    if( process.env.NODE_ENV === "development" ) {
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
    } else if( process.env.NODE_ENV === "production" ) {
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