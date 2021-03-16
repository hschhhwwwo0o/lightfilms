import Document, { Html, Head, Main, NextScript } from "next/document";

export default class Doc extends Document {
    
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
                    <link type="image/png" sizes="16x16" rel="icon" href="/static/favicon-16x16.png" />
                    <link type="image/png" sizes="32x32" rel="icon" href="/static/favicon-32x32.png" />
                    <link type="image/png" sizes="72x72" rel="icon" href="/static/favicon-72x72.png" />
                    <link type="image/png" sizes="96x96" rel="icon" href="/static/favicon-96x96.png" />
                    <link type="image/png" sizes="120x120" rel="icon" href="/static/favicon-120x120.png" />

                    <link type="image/png" sizes="192x192" rel="icon" href="/static/android-icon-192x192.png" />

                    <link sizes="120x120" rel="apple-touch-icon" href="/static/apple-touch-icon-120x120.png" />
                    <link sizes="180x180" rel="apple-touch-icon" href="/static/apple-touch-icon-180x180.png" />

                    <meta name="theme-color" content="#181818" />

                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta httpEquiv="Content-language" content="en-US" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <meta property="og:site_name" content="LIGHTFILMS" />
                    <meta property="og:locale" content="en_US" />

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