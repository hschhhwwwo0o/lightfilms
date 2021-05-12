import { AppProps } from "next/app";
import Head from "next/head";

import "../assets/scss/global.scss";

// Custom App.
// Next.js uses the App component to initialize pages.

// https://nextjs.org/docs/advanced-features/custom-app

function _App({ Component, pageProps }: AppProps) {
    return <>
        <Head>
            <meta 
                name="viewport" 
                content="width=device-width, initial-scale=0.0, minimum-scale=1.0, maximum-scale=1.0" 
            />
        </Head>
        <Component { ...pageProps } />
    </>
}

export default _App;