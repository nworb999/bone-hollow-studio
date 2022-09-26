import "../styles/globals.css";

import Layout from "../components/layout";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/leaf.svg"
          className="invert(68%) sepia(9%) saturate(467%) hue-rotate(64deg) brightness(93%) contrast(89%)"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo&family=Inconsolata&family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
