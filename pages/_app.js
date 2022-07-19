import Head from "next/head";
import { Global } from "@emotion/react";
import xw from "xwind";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>bone hollow studio</title>
        <link rel="shortcut icon" href="/leaf.svg" />
      </Head>
      <Global
        //tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
        styles={xw`XWIND_BASE XWIND_GLOBAL`}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
