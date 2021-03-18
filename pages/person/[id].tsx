import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { ALL_PERSON_FIELDS } from "../../graphql/fragments";
import { IPerson } from "../../interfaces";

import DefaultLayout from "../../layouts/default";
import Meta from "../../components/Meta";
import Card from "../../components/Card";

interface PersonPageProps {
    person: IPerson
}

const PersonPage: React.FC<PersonPageProps> = ({ person }) => {

    const h1perfect = (name: string) => {

        const firstName = name.split(" ")[0]
        const secondName = name.split(" ")[1]

        if( firstName.length >= secondName.length ) {
            if( secondName.length < 4 ) {
                return [ secondName, firstName ]
            } else {
                return [ firstName, secondName ]
            }
        } else if( secondName.length >= firstName.length ) {
            if( firstName.length < 4 ) {
                return [ firstName, secondName ]
            }
            return [ secondName, firstName ]
        }
    }

    return <DefaultLayout>
        <Meta 
            titleShort={`LIGHTFILMS | ${ person.name }`}
            titleLong={`LIGHTFILMS | ${ person.name }`}
            description={`LIGHTFILMS. ${ person.name }. Read more biography about ${ person.name }, ${ person.type }. ${ person.countries[0] } ${ person.type }. `}
            url={`https://lightfilms-ssandry.vercel.app/person/${person.id}`} 
            keywords={`LIGHTFILMS, ${ person.name }, ${ person.type }, ${ person.yearsPopular[0] }, ${ person.about.mostPopularFilm.h3 }`}
        />
        <section id="person__header" >
            <h1>{ h1perfect(person.name)[0] }</h1>
            <h1>{ h1perfect(person.name)[1] }</h1>
        </section>
        <div id="person__imgs">
            <div>
                <img src={ person.imgs[0] } alt={`person image ${ person.type } ${ person.name } ${ person.yearsPopular[0] }`}/>
            </div>
            <div>
                <img src={ person.imgs[1] } alt={ `person image ${ person.type } ${ person.name } ${ person.yearsPopular[0] }` }/>
            </div>
            <div>
                <img src={ person.imgs[2] } alt={`person image ${ person.type } ${ person.name } ${ person.yearsPopular[0] }` }/>
            </div>
        </div>
        <section id="bio" >
            <article>
                <div className="left"><h5>BIOGRAPHY</h5></div>
                <div className="right"> 
                    <h4>{ person.briefAbout }</h4>
                    <p>{ person.about.paragraphs[0] }</p>
                
                </div>
            </article>
            <article>
                <div className="left"><h5>MOST POPULAT FILM</h5></div>
                <div className="mostPopularFilm"> 
                    <Card 
                        HREF    = "/film/[id]"
                        AS      = { `/film/${ person.about.mostPopularFilm.id }`}
                        ALT     = { `Film ${ person.about.mostPopularFilm.h3 } ${ person.about.mostPopularFilm.h6bot }` }

                        img     = { person.about.mostPopularFilm.img }
                        h3      = { person.about.mostPopularFilm.h3 }
                        h6bot   = { person.about.mostPopularFilm.h6bot }
                        h6top   = { person.about.mostPopularFilm.h6top }
                        type    = "single"
                    />

                    <p>{person.about.paragraphs[1]}</p>
                </div>
            </article>
            <article>
                <div className="left"><h5>LAST ROLES</h5></div>
                <div className="right"> 
                    <p>{ person.about.paragraphs[2] }</p>
                    <p>{ person.about.paragraphs[3] }</p>
                </div>
            </article>
            <section id="filmography__wrap">
                <h5>FILMOGRAPHY</h5>
                <div id="filmography">
                    {
                        person.filmography.map( (film) => {
                            return <Card
                                key     = { film.id }
                                HREF    = "/film/[id]"
                                AS      = { `/film/${ film.id }` }
                                ALT     = { `Film ${ film.h3 } ${ film.h6bot }` }

                                img     = { film.img}
                                h3      = { film.h3 }
                                h6top   = { film.h6top }
                                h6bot   = { film.h6bot }
                                type    = "single"
                            />
                        } )
                    }
                </div>
            </section>
        </section>
    </DefaultLayout>
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {

    if( process.env.MODE === "development" ) {
        try {
            const client = new ApolloClient({
                uri: process.env.DEV_GRAPHQL_SERVER,
                cache: new InMemoryCache()
            })

            const data = await client.query({
                query: gql`
                    query getPerson {
                        getPerson(id: ${ctx.params.id}) {
                            ...PersonFragment
                    }
                }
                ${ALL_PERSON_FIELDS.fragment}
                `
            })

            return {
                props: {
                    person: data.data.getPerson
                }
            }

        } catch(err) {
            throw new Error(`Error: ${err}`);
        }
    } else if( process.env.MODE === "production" ) {
        try {
            const client = new ApolloClient({
                uri: process.env.PROD_GRAPHQL_SERVER,
                cache: new InMemoryCache()
            })

            const data = await client.query({
                query: gql`
                    query getPerson {
                        getPerson(id: ${ctx.params.id}) {
                            ...PersonFragment
                    }
                }
                ${ALL_PERSON_FIELDS.fragment}
                `
            })

            return {
                props: {
                    person: data.data.getPerson
                }
            }

        } catch(err) {
            throw new Error(`Error: ${err}`);
        }
    } else {
        throw new SyntaxError(`The MODE is written incorrectly. Check the syntax in .env`);
    }
}

export const getStaticPaths: GetStaticPaths = async ctx => {

    if( process.env.MODE === "development" ) {
        try {
            const client = new ApolloClient({
                uri: process.env.DEV_GRAPHQL_SERVER,
                cache: new InMemoryCache()
            })

            const data = await client.query({
                query: gql`
                    query getAllPersons {
                        getAllPersons {
                            id
                    }
                }
                `
            })

            const paths = await data.data.getAllPersons.map( ( {id} ) => {
                return (
                    {
                        params: { id: id }
                    }
                )
            } )

            return { 
                paths, 
                fallback: false 
            }

        } catch(err) {
            throw new Error(`Error: ${err}`);
        }
    } else if( process.env.MODE === "production" ) {
        try {
            const client = new ApolloClient({
                uri: process.env.PROD_GRAPHQL_SERVER,
                cache: new InMemoryCache()
            })

            const data = await client.query({
                query: gql`
                    query getAllPersons {
                        getAllPersons {
                            id
                    }
                }
                `
            })

            const paths = await data.data.getAllPersons.map( ( {id} ) => {
                return (
                    {
                        params: { id: id }
                    }
                )
            } )

            return { 
                paths, 
                fallback: false 
            }
        } catch(err) {
            throw new Error(`Error: ${err}`);
        }
    } else {
        throw new SyntaxError(`The MODE is written incorrectly. Check the syntax in .env`);
    }
}

export default PersonPage;