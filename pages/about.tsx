import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { chairs, door } from "../src/images";
import styles from "../styles/Home.module.css";
import { aboutTextArray, aboutImageArray } from "../src/constants";

const Home: NextPage = () => {
  return (
    <>
      {" "}
      <Head>
        <title>bone hollow studio - about</title>
      </Head>
      <div id="empty-div-row"></div>
      <main>
        <h1 className={styles.huge_bold_text}>who we are</h1>{" "}
        <section className={styles.section}>
          <article className={styles.article}>
            <Image
              alt={aboutImageArray[0].altText}
              src={aboutImageArray[0].image}
              width={500}
              height={500}
              objectFit="cover"
            />
          </article>
          <article className={styles.article}>
            <p className={styles.small_bold_text}>{aboutTextArray[0]}</p>
          </article>
          <article className={styles.article}>
            <p id="ownerPara1" className={styles.small_bold_text}>
              {aboutTextArray[1]}
            </p>
          </article>
          <article className={styles.article}>
            <Image
              alt={aboutImageArray[1].altText}
              src={aboutImageArray[1].image}
              width={500}
              height={500}
              objectFit="cover"
            />
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
