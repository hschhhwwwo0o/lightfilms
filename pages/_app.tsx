import { AppProps } from 'next/app'

import "../scss/global.scss";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App