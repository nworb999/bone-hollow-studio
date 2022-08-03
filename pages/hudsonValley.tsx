import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>bone hollow studio - hudson valley</title>
      </Head>
      <main className={styles.main}>
        <h1>Hudson Valley</h1>
      </main>
    </>
  );
};

export default Home;
