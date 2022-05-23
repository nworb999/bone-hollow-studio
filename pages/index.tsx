import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import pigPic from "../public/assets/sample.jpeg";
import backyard from "../public/assets/accord-spring-209.jpg";
import coverPhoto from "../public/assets/accord-spring-446.jpg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <article className={styles.article}>
          {" "}
          <div className={styles.home_cover}>
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
      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.home_cover_overlay}>
            <h2 id="heading">
              bone hollow is a boutique development company located in Ulster
              County
            </h2>
          </div>
        </article>
      </main>
      <main className={styles.main}>
        <article className={styles.article}>
          <Image
            alt="poolhouse shot"
            src={backyard}
            width={500}
            height={500}
            objectFit="contain"
          />
        </article>
        <article className={styles.article}>
          <h2 id="para1">
            each home is designed and built with the surroundings taking the
            lead role
          </h2>
        </article>
      </main>
      <main className={styles.main}>
        <article className={styles.article}>
          <h2>
            the result is a rendezvous of rural tranquility and custom design
          </h2>
          <div id="para2">
            <h2>
              we love living in the Hudson Valley and want to help maintain its
              special rural community
              <br />
              there's something about this place that sparks creativity and
              innovation
            </h2>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Home;
