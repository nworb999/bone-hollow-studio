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
        <CenterContent>
          <div>
            <Image
              className={styles.filter_dark}
              src="/tree.svg"
              objectFit="fill"
              width={150}
              alt="silver tree with leaves falling"
              height={150}
            />
          </div>
        </CenterContent>
        <CenterContent>
          <p className={styles.huge_bold_text}>owner</p>
          <p className={styles.bold_text}>Erika Brown</p>

          <p className={styles.small_bold_text}>erika@bonehollow.studio</p>
          <p className={styles.small_bold_text}>(917) 922-1396</p>
        </CenterContent>
        <CenterContent>
          <p className={styles.huge_bold_text}>builder</p>
          <p className={styles.bold_text}>Hudson Valley Homes & Renovations</p>
          <p className={styles.small_bold_text}>Jeromy Wells</p>
          <p className={styles.small_bold_text}>(845) 532-5899</p>
        </CenterContent>
        <CenterContent>
          <p className={styles.huge_bold_text}>real estate agent</p>
          <p className={styles.bold_text}>Laurel Sweeney</p>
          <p className={styles.small_bold_text}>
            laurelsweeney.nutshellrealty.com/
          </p>
          <p className={styles.small_bold_text}>laurel@nutshellrealty.com</p>
          <p className={styles.small_bold_text}>(845) 325-4431 cell</p>
          <p className={styles.small_bold_text}>(845) 687-2200 office</p>
        </CenterContent>
      </div>
    </>
  );
};

export default Home;
