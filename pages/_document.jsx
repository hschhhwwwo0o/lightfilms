import Document, { Html, Head, Main, NextScript } from 'next/document'
import Header from "../components/Header/header"

//!!!!!!!

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Header />
          <div id="main-wrapper">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument