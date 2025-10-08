// pages/_app.js
import Head from "next/head";
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUa6Y5h2y3v0z2z2oQZ+q2Xw5K0o1b5L1eB1zG1q1zRr1x8q2kF6K6N9a7wF"
          crossOrigin="anonymous"
        />
        {/* Optional: Bootstrap JS bundle (popper + bootstrap) for toggler */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoYz1G+6h3yZr2gq0n+Y6Q9E1zqf1y2w3v4g5r6t7u8v9w0"
          crossOrigin="anonymous"
          defer
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
