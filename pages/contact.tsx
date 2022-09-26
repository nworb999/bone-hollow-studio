import type { NextPage } from "next";
import Head from "next/head";

import Image from "next/image";
import Script from "next/script";
import { CenterContent } from "../components/containers";

import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>bone hollow studio - contact</title>
      </Head>
      <Script src="transparent.js" strategy="lazyOnload" />
      <div id="empty-div-row"></div>
      <div className={styles.main_style}>
        <p className={styles.header_text}>contact</p>
        <div className={styles.contact_container}>
          <CenterContent>
            <p className={styles.small_header_text}>owner</p>
            <p className={styles.contact_text}>Erika Brown</p>
            <p className={styles.contact_text}>erika@bonehollow.studio</p>
            <p className={styles.contact_text}>(845) 605-9550 </p>
          </CenterContent>
        </div>
        <CenterContent>
          <p className={styles.small_header_text}>builder</p>
          <p className={styles.contact_text}>Jeromy Wells</p>
          <p className={styles.contact_text}>
            <em>
              Hudson Valley Homes <br />& Renovations
            </em>
          </p>
        </CenterContent>
      </div>
    </>
  );
};

export default Home;
