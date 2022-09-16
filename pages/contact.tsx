import type { NextPage } from "next";
import Head from "next/head";

import Image from "next/image";
import Script from "next/script";
import { CenterContent } from "../components/containers";
import LeafButton from "../components/leafbutton";

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
        <CenterContent>
          <p className={styles.header_text}>owner</p>
          <p className={styles.small_bold_text}>Erika Brown</p>

          <p className={styles.small_bold_text}>erika@bonehollow.studio</p>
          <p className={styles.small_bold_text}>(845) 605-9550 </p>
        </CenterContent>
        <CenterContent>
          <p className={styles.header_text}>builder</p>
          <p className={styles.small_bold_text}>
            Hudson Valley Homes & Renovations
          </p>
          <p className={styles.small_bold_text}>Jeromy Wells</p>
          <p className={styles.small_bold_text}>(845) 532-5899</p>
        </CenterContent>
        <CenterContent>
          <p className={styles.header_text}>realtor</p>
          <p className={styles.small_bold_text}>Laurel Sweeney</p>
          <p className={styles.small_bold_text}>
            laurelsweeney.nutshellrealty.com
          </p>
          <p className={styles.small_bold_text}>laurel@nutshellrealty.com</p>
          <p className={styles.small_bold_text}>(845) 325-4431 cell</p>
          <p className={styles.small_bold_text}>(845) 687-2200 office</p>
        </CenterContent>
        <CenterContent>
          <p>
            <br />
          </p>
        </CenterContent>
        <LeafButton text="browse projects"></LeafButton>
      </div>
    </>
  );
};

export default Home;
