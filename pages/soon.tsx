import Head from "next/head";
import DefaultLayout from "../layouts/default";

const ComingSoon = () => {
    return <>
        <DefaultLayout>
            <Head>
                <title>LIGHTFILMS | Coming Soon</title>

                {/* Standart meta */}
                <meta 
                    name="description" 
                    content={`LIGHTFILMS. The page is not available yet, but we will soon create something new here :)`} 
                />
                <link rel="canonical" href="https://lightfilms-ssandry.vercel.app/soon" />

                {/* Open Graph meta */}
                <meta 
                    property="og:url" 
                    content={ `https://lightfilms-ssandry.vercel.app/soon` } 
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="LIGHTFILMS. Coming Soon" />
                <meta 
                    property="og:description" 
                    content="LIGHTFILMS. The page is not available yet, but we will soon create something new here :)"
                />
            </Head>
            <div id="coming">
                <h2>Coming Soon</h2>
            </div>
        </DefaultLayout>
        <style jsx >
        {`
            #coming {
                width: 100%;
                height: calc(100vh - 200px);

                display: flex;
                align-items: center;
                justify-content: center;
            }
        `}
        </style>
    </>
}

export default ComingSoon;