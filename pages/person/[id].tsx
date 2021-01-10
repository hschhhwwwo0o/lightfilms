import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head"
import { IPerson } from "../../interfaces/interfaces";

import Header from "../../components/Header/header"

interface PersonPageProps {
    person: IPerson
}

const PersonPage: React.FC<PersonPageProps> = ( {person} ) => {
    return <>
        <Head>
            <title>LIGHTFILMS BIO : {person.name}</title>
        </Head>
        <Header />
        <h1>
            { person.name }
        </h1>
    </>
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {

    if( process.env.MODE === "development" ) {
        try {

            const res: Response = await fetch(`${process.env.DEV_JSON_SERVER}/persons?id=${ctx.params.id}`);
            const person: IPerson = await res.json()

            return {
                props: {
                    person: person[0]
                }
            }

        } catch(err) {
            console.log( `Err: ${err}` )
        }
    } else if( process.env.MODE === "production" ) {
        try {

            const res: Response = await fetch(`${process.env.PROD_JSON_SERVER}`)
            const data = await res.json()

            const person = await data.persons.filter( (person) => {
                return person.id === ctx.params.id
            } )

            return {
                props: {
                    person: person[0]
                }
            }

        } catch(err) {
            console.log( `Err: ${err}` )
        }
    }

    return null
}

export const getStaticPaths: GetStaticPaths = async ctx => {

    if( process.env.MODE === "development" ) {
        try {
            
            const res: Response = await fetch(`${process.env.DEV_JSON_SERVER}/persons`)
            const persons = await res.json();

            const paths = persons.map( (person) => {
                return (
                    {
                        params: { id: person.id }
                    }
                )
            } )

            return { paths, fallback: false }

        } catch(err) {
            console.log( `Err: ${err}` )
        }
        
    } else if( process.env.MODE === "production" ) {

        try {
            const res: Response = await fetch(`${process.env.PROD_JSON_SERVER}`)
            const data = await res.json()
            const persons = await data.persons;
    
            const paths = persons.map( (person) => {
                return (
                    {
                        params: { id: person.id }
                    }
                )
            } )
    
            return {
                paths,
                fallback: false
            }
        } catch(err) {
            console.log( `Err: ${err}` )
        }
    }
}

export default PersonPage;