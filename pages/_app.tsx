import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Nav from "../components/nav";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kamryn Ridley</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
