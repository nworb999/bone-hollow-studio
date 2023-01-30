import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { CenterContent } from "../components/containers";
import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>hudson valley</title>
      </Head>
      <Script src="transparent.js" strategy="lazyOnload" />
      <div id="empty-div-row"></div>
      <div className={styles.main_style}>
        <CenterContent>
          <p className={styles.header_text}>hudson valley recommendations</p>
        </CenterContent>
      </div>
    </div>
  );
};

export default Home;
