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
          rel="shortcut icon"
          href="/images/leaf.svg"
          className="invert(68%) sepia(9%) saturate(467%) hue-rotate(64deg) brightness(93%) contrast(89%)"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/leaf.svg"
          className="invert(68%) sepia(9%) saturate(467%) hue-rotate(64deg) brightness(93%) contrast(89%)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/leaf.svg"
          className="invert(68%) sepia(9%) saturate(467%) hue-rotate(64deg) brightness(93%) contrast(89%)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/leaf.svg"
          className="invert(68%) sepia(9%) saturate(467%) hue-rotate(64deg) brightness(93%) contrast(89%)"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
