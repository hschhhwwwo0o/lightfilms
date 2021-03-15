interface IOpenGraph {
    title: string
    url: string
    description: string
}

const OpenGraph: React.FC<IOpenGraph> = ({ title, url, description }) => {
    return <>
        <meta property="og:title" content={`LIGHTFILMS`} />
        <meta 
            property="og:url" 
            content="https://lightfilms-ssandry.vercel.app/" 
        />
        <meta 
            property="og:description" 
            content={`LIGHTFILMS - More about cinema. Read about the great films of the last century.`} 
        />
    </>
}

export default OpenGraph;