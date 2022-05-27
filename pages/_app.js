import Head from 'next/head';
import 'styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:title" key="og:title" content="radoonroad" />
        <meta property="og:description" key="og:description" content="Разкази за преживявания на път от radoonroad" />
        <meta name="description" content="Разкази за преживявания на път от radoonroad" />
        {/* <meta property="og:image" key="og:image" content="https://arcane.no/research/favicon-1232x1232.png" /> */}
        <meta property="og:url" key="og:url" content="https://radoonroad.com" />

        <meta property="twitter:card" key="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" key="og:site_name" content="radoonroad" />

        <title>radoonroad</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
