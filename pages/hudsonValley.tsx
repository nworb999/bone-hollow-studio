import type { NextPage } from "next";
import Head from "next/head";
import { CenterContent } from "../components/containers";
import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>bone hollow studio - hudson valley</title>
      </Head>
      <div className={styles.main_style}>
        <CenterContent>
          <h1>coming soon!</h1>
        </CenterContent>
      </div>
    </>
  );
};

export default Home;
