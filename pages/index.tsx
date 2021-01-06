import { data } from "../data/data";
import { GetStaticProps } from "next";
import Header from "../components/Header/header"

import Card from "../components/Card/card";
import { ICard } from "../interfaces/interfaces"
import Link from "next/link";

interface IndexPageProps {
    cards?: ICard[] | null
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
            <Card 
                id = {"0"} 
                href = {`person/${0}`}
                h3 = "The tree grows in Brooklyn"
                h6bot = "Drama | Romance | 70’s | United States of America" 
                h6top = "Elia Kazan" 
                img = "https://www.whistles.com/on/demandware.static/-/Library-Sites-WHSharedLibrary/default/dwb9112f72/images/inspiration/Stanley-Kubrick-Listing-Image-1152x1440.jpg"
                img2 = "https://rockcult.ru/wp-content/uploads/2018/07/stanley-kubrick.jpg"
                type = "double"
            />
            <Card 
                id = {"0"} 
                href = {`person/${0}`}
                h3 = "The tree grows in Brooklyn"
                h6bot = "Drama | Romance | 70’s | United States of America" 
                h6top = "Elia Kazan" 
                img = "https://avatars.mds.yandex.net/get-zen_doc/3122622/pub_5ef62bc22c4fe9645d1ce2c8_5ef636d56624e262c74c3abe/scale_1200"
                type = "single"
            />
            <Card 
                id = {"0"} 
                href = {`person/${0}`}
                h3 = "The tree grows in Brooklyn"
                h6bot = "Drama | Romance | 70’s | United States of America" 
                h6top = "Elia Kazan" 
                img = "https://kuda-spb.ru/uploads/9fa6f1840991c2770705cc2fd89737ef.jpg"
                type = "single"
            />
        </div>
    </>
}

export const getStaticProps: GetStaticProps = async ctx => {

    try {

        const cards = null

        return {
            props: {
                cards
            }
        }

    } catch(err) {
        console.log( `Err: ${err}` )
    }
}

export default IndexPage;