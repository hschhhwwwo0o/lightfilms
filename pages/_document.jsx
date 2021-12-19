import Document, { Html, Head, Main, NextScript } from "next/document";
import TheMeta from "../components/TheMeta";

// A custom Document is commonly used to augment your application's <html> and <body> tags.]

// This is necessary because Next.js pages skip the definition
// of the surrounding document's markup.

// https://nextjs.org/docs/advanced-features/custom-document

export default class __Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <>
        <Html prefix="og: http://ogp.me/ns#" lang="en-us" dir="ltr">
          <Head>
            <TheMeta />

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
      </>
    );
  }
}
