import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>bone hollow studio - contact</title>
      </Head>
      {/* <div id="empty-div-row"></div> */}
      <div className={styles.main_style}>
        <main>
          <p>Contact </p>
        </main>
      </div>
    </>
  );
};

export default Home;
