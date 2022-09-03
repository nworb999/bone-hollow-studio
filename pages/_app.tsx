import "../styles/globals.css";

import Layout from "../components/layout";
import type { AppProps } from "next/app";
import React, { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
