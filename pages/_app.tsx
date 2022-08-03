import "../styles/globals.css";
import Layout from "../components/layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div id="empty-div-row"></div> <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
