import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import aerial from "../public/assets/poolhouse/aerial.jpg";
import spring from "../public/assets/poolhouse/spring1.jpg";
import coverPhoto from "../public/assets/livingroom.jpg";
import Head from "next/head";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <>
      {" "}
      <Script src="transparent.js" strategy="lazyOnload" />
      <Head>
        <title>bone hollow studio - homepage</title>
      </Head>
      <main className={styles.main}>
        <article className={styles.article}>
          {" "}
          <div id="coverPhoto" className={styles.home_cover}>
            {" "}
            <Image
              alt="Catskills"
              src={coverPhoto}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </article>
      </main>
      <div id="empty-div-row"></div>
      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.home_cover_overlay}>
            <p className={styles.big_bold_text}>
              bone hollow is a boutique development company located in Ulster
              County
            </p>
          </div>
        </article>
      </main>
      <main className={styles.main}>
        <article className={styles.article}>
          <Image
            alt="poolhouse shot"
            src={aerial}
            width={1000}
            height={1000}
            objectFit="cover"
          />
        </article>
        <article className={styles.article}>
          <Image
            alt="poolhouse shot"
            src={spring}
            width={500}
            height={500}
            objectFit="cover"
          />
          <p className={styles.bold_text}>
            each home is designed and built with the surroundings taking the
            lead role
          </p>
          <p className={styles.bold_text}>
            the result is a combination of rural tranquility and custom design
          </p>
        </article>
      </main>
      <main className={styles.main}>
        <article className={styles.article}>
          <p className={styles.bold_text}>
            our work is founded in the belief that form and function are both
            requisite for a well-designed home{" "}
          </p>
          <p className={styles.bold_text}>
            we apply that perspective to projects of every size, from
            furnishings to new builds
          </p>
          <p className={styles.bold_text}>
            the spaces we create are characterized by luxurious textures,
            quality materials, and a minimalistic style, because we believe that
            the way your home feels is just as significant as how it looks
          </p>
          <p className={styles.bold_text}>
            we love living in the Hudson Valley and want to help maintain its
            special rural community
            <br />
            there's something about this place that sparks creativity and
            innovation
          </p>
        </article>
      </main>
    </>
  );
};

export default Home;
