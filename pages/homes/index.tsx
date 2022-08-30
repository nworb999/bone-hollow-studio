import type { NextPage } from "next";
import Head from "next/head";
import HomeButton from "../../components/homebutton";
import { handleSyntaxError } from "../../src/utils";
import Script from "next/script";
import styles from "../../styles/home.module.css";

import { homesArray } from "../../src/constants";
import { CenterContent } from "../../components/containers";

const Homes: NextPage = () => {
  return (
    <>
      <Script
        src="transparent.js"
        strategy="lazyOnload"
        onError={handleSyntaxError}
      />
      <Head>
        <title>bone hollow studio - homes</title>
      </Head>
      <div id="empty-div-row"></div>
      <CenterContent>
        <p className={styles.huge_bold_text}>projects</p>
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
