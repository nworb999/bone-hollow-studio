import type { NextPage } from "next";
import Head from "next/head";
import HomeButton from "../../components/homebutton";
import styles from "../../styles/home.module.css";

import { homesArray } from "../../src/constants";
import { CenterContent } from "../../components/containers";
import Script from "next/script";

const Homes: NextPage = () => {
  return (
    <>
      <Head>
        <title>bone hollow studio - homes</title>
      </Head>
      <Script src="transparent.js" strategy="lazyOnload" />
      <div id="empty-div-row"></div>
      <CenterContent>
        <p className={styles.header_text}>projects</p>
      </CenterContent>{" "}
      <div className={styles.section_style}>
        {homesArray.map((home, i) => (
          <HomeButton home={home} index={i} key={i} />
        ))}
      </div>
    </>
  );
};

export default Homes;
