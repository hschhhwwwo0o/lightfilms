import { data } from "../data/data";
import { GetStaticProps } from "next";

interface IndexPageProps {
    name?: string
}

const IndexPage: React.FC<IndexPageProps> = ( {name} ) => {
    return <>
        
    </>
}

export const getStaticProps: GetStaticProps = async ctx => {

    try {
        //const res: Response = await fetch("")
        const name = await data.name;

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