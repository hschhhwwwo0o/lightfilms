import { data } from "../data/data";
import { GetStaticProps } from "next";

import Card from "../components/Card/card"

interface IndexPageProps {
    name?: string
}

const IndexPage: React.FC<IndexPageProps> = ( {name} ) => {
    return <>
        <Card 
            width = "100%" 
            height = "452px" 
        />
    </>
}

export const getStaticProps: GetStaticProps = async ctx => {

    try {

        const name = data.persons[0].name

        return {
            props: {
                name
            }
        }
    } catch(err) {
        console.log( `Err: ${err}` )
    }
}

export default IndexPage;