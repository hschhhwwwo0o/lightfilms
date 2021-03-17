import Head from "next/head";

const Meta = () => {
    return <Head>
        <title>LIGHTFILMS</title>

        {/* Standart meta */}
        <meta 
            name="keywords" 
            content="LIGHTFILMS, Movies in black and white, Retro movies, Classics of cinematograph, cinematography, black and white movies, Full-length cinema, Fiction cinema, History cinema, LIGHT FILMS, Light Films," 
        />
        <meta 
            name="description" 
            content={`LIGHTFILMS - More about cinema. Read about the great films of the last century. All the best black and white movies. Learning the shooting style of great directors. 1950 cinema,  1960 cinema, 1970 cinema, 1980 cinema`} 
        />
        <link rel="canonical" href="https://lightfilms-ssandry.vercel.app/"/>

        {/* Open Graph meta */}
        <meta 
            property="og:url" 
            content={ `https://lightfilms-ssandry.vercel.app/` } 
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LIGHTFILMS - Learn more about great movies & persons" />
        <meta 
            property="og:description" 
            content="LIGHTFILMS is a website for fans of old and high-quality movies. Here you will find the best movies of the past time. There is a collection of more than 30 films from popular to avant-garde."
        />
    </Head>
}

export default Meta;