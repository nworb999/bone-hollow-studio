import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>bone hollow studio - contact</title>
      </Head>
      <div id="empty-div-row"></div>
      <main className={styles.main}>
        <p>Contact </p>
      </main>
    </>
  );
};

export default Home;
