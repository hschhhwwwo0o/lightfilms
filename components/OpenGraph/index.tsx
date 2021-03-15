interface IOpenGraph {
    title: string
    url: string
    description: string
}

const OpenGraph: React.FC<IOpenGraph> = ({ title, url, description }) => {
    return <>
        <meta property="og:title" content={ title } />
        <meta 
            property="og:url" 
            content={ `https://lightfilms-ssandry.vercel.app${url}` } 
        />
        <meta 
            property="og:description" 
            content={ description } 
        />
    </>
}

export default OpenGraph;