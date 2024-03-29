import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Content from "../components/Content";

import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>contact</title>
      </Head>
      {/* <Script src="transparent.js" strategy="lazyOnload" />
      <div id="empty-div-row"></div> */}
      <div className={styles.main_style}>
        <p className={styles.header_text}>contact</p>
        <div className={styles.contact_container}>
          <Content alignment="center">
            <p className={styles.small_header_text}>owner</p>
            <p className={styles.contact_text}>
              <strong>Erika Brown</strong>
            </p>
            <p className={styles.contact_text}>erika@bonehollow.studio</p>
            <p className={styles.contact_text}>(845) 605-9550 </p>
          </Content>
        </div>
        <Content alignment="center">
          <p className={styles.small_header_text}>builder</p>
          <p className={styles.contact_text}>
            <strong>Jeromy Wells</strong>
          </p>
          <p className={styles.contact_text}>
            Hudson Valley Homes <br />& Renovations
          </p>
        </Content>
      </div>
    </>
  );
};

export default Home;
