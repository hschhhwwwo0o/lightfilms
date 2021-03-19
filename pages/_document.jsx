import Document, { Html, Head, Main, NextScript } from "next/document";

export default class Doc extends Document {
    
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html prefix="og: http://ogp.me/ns#" lang="en-us" dir="ltr" >
                <Head>
                    {/* Favicons */}
                    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
                    <link type="image/png" sizes="16x16" rel="icon" href="/static/favicon-16x16.png" />
                    <link type="image/png" sizes="32x32" rel="icon" href="/static/favicon-32x32.png" />
                    <link type="image/png" sizes="48x48" rel="icon" href="/static/favicon-48x48.png" />
                    <link type="image/png" sizes="72x72" rel="icon" href="/static/favicon-72x72.png" />
                    <link type="image/png" sizes="96x96" rel="icon" href="/static/favicon-96x96.png" />
                    <link type="image/png" sizes="120x120" rel="icon" href="/static/favicon-120x120.png" />

                    <link type="image/png" sizes="192x192" rel="icon" href="/static/android-icon-192x192.png" />

                    <link sizes="120x120" rel="apple-touch-icon" href="/static/apple-touch-icon-57x57.png" />
                    <link sizes="120x120" rel="apple-touch-icon" href="/static/apple-touch-icon-76x76.png" />
                    <link sizes="120x120" rel="apple-touch-icon" href="/static/apple-touch-icon-120x120.png" />
                    <link sizes="180x180" rel="apple-touch-icon" href="/static/apple-touch-icon-180x180.png" />

                    {/* Standart */}
                    <meta name="hostname" content="lightfilms-ssandry.vercel.app" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta httpEquiv="Content-language" content="en-US" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="robots" content="index, follow" />
                    <link rel="manifest" href="/static/manifest.json" />

                    <meta name="theme-color" content="#181818" />
                    <meta name="author" content="GitHub: ssandry" />
                    <meta name="publisher" content="LIGHTFILMS" />
                    <meta name="copyright" content={`${new Date().getFullYear()} LIGHTFILMS`} />

                    {/* Open Graph */}
                    <meta property="og:image" content="https://lightfilms-ssandry.vercel.app/static/lightfilms-promo.png" />
                    <meta property="og:image:secure_url" content="https://lightfilms-ssandry.vercel.app/static/lightfilms-promo.png" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta property="og:site_name" content="LIGHTFILMS" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:locale:alternate" content="en_UK" />

                    {/* Open Graph Twitter */}
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@lightfilms" />
                    <meta name="twitter:creator" content="@ssandry" />
                    <meta name="twitter:image" content="https://lightfilms-ssandry.vercel.app/static/lightfilms-twitter-promo.png" />
                    <meta name="twitter:image:width" content="900" />
                    <meta name="twitter:image:height" content="900" />
                    
                    {/* <meta name="twitter:image:alt" content="https://site.com/past.png" /> */}

                    {/* Fonts */}
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" 
                        rel="stylesheet" 
                    />
                </Head>
                <body>
                    <main id="main-wrapper">
                        <Main />
                    </main>
                    <NextScript />
                </body>
            </Html>
        )
    }
}