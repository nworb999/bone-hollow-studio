import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>bone hollow studio - hudson valley</title>
      </Head>
      <div id="empty-div-row"></div>
      <main className={styles.main}>
        <h1>Hudson Valley</h1>
      </main>
    </>
  );
};

export default Home;
