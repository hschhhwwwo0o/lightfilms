import Head from "next/head";
import TheHeader from "../components/TheHeader/index";

const C404: React.FunctionComponent = () => {
    return <>
        <Head>
            <title>Page unavailable</title>

            {/* Standart meta */}
            <meta 
                name="description" 
                content={`LIGHTFILMS. Page unavailable`} 
            />
            <link rel="canonical" href="https://lightfilms-ssandry.vercel.app/404" />

            {/* Open Graph meta */}
            <meta 
                property="og:url" 
                content={ `https://lightfilms-ssandry.vercel.app/404` } 
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="LIGHTFILMS. Page unavailable" />
            <meta 
                property="og:description" 
                content="LIGHTFILMS. Page unavailable"
            />
        </Head>
        <TheHeader />
        <div className="custom404">
            <div>
                <h1>404</h1>
                <p>Page not found</p>
            </div>
        </div>
    </>
}

export default C404;