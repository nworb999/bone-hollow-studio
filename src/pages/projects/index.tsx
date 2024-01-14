import type { NextPage } from "next";
import Head from "next/head";
import HomeButton from "../../components/HomeButton";
import styles from "../../styles/home.module.css";
import { projectsArray } from "../../constants";
import Content from "../../components/Content";
import Script from "next/script";

const Homes: NextPage = () => {
  return (
    <>
      <Head>
        <title>projects</title>
      </Head>
<!--       <Script src="transparent.js" strategy="lazyOnload" /> -->
      <div id="empty-div-row"></div>
      <Content alignment="center">
        <p className={styles.header_text}>projects</p>
      </Content>{" "}
      <div className={styles.section_style}>
        {projectsArray.map((home, i) => (
          <HomeButton home={home} index={i} key={i} />
        ))}
      </div>
    </>
  );
};

export default Homes;
