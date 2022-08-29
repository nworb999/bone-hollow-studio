import type { NextPage } from "next";
import Head from "next/head";
import HomeButton from "../../components/homebutton";
import { handleSyntaxError } from "../../src/utils";
import styles from "../../styles/index.module.css";
import Script from "next/script";
import { homesArray } from "../../src/constants";

const Homes: NextPage = () => {
  return (
    <>
      <Script
        src="transparent.js"
        strategy="lazyOnload"
        onError={handleSyntaxError}
      />
      <main>
        <Head>
          <title>bone hollow studio - homes</title>
        </Head>
        <div id="empty-div-row"></div>
        <article>
          <h1 className={styles.huge_bold_text}>projects</h1>
        </article>
        <section className={styles.section}>
          {homesArray.map((home, i) => (
            <HomeButton home={home} index={i} key={i} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Homes;
