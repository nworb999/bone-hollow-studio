import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { CenterContent } from "../components/containers";
import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>hudson valley</title>
      </Head>
      <Script src="transparent.js" strategy="lazyOnload" />
      <div id="empty-div-row"></div>
      <div className={styles.main_style}>
        <p className={styles.header_text}>hudson valley</p>
        <div className={styles.contact_container}>
          <CenterContent>
            <p className={styles.small_header_text}>sporty</p>
            <p className={styles.contact_text}>
              <strong>Bellayre</strong>
            </p>
            <p className={styles.contact_text}>
              Convenience and local charm. Not just for skiing -- during the
              summer, there is hiking, swimming and even disc golf.
            </p>

            <p className={styles.contact_text}>
              <strong>Minnewaska State Park</strong>
            </p>
            <p className={styles.contact_text}>
              Minnewaska State Park is full of wonderful trails, lakes and
              waterfalls. Cross country skiing and snow shoe trails in the
              winter.
            </p>

            <p className={styles.contact_text}>
              <strong>Ulster County</strong>
            </p>
            <p className={styles.contact_text}>
              Ulster County has done an amazing job creating rail trails that
              are bike and hike ready.
            </p>
          </CenterContent>
        </div>
        <CenterContent>
          <p className={styles.small_header_text}>food and lodging</p>
          <p className={styles.contact_text}>
            <strong>Hasbrouck House</strong>
          </p>
          <p className={styles.contact_text}>
            Named by the World Boutique Hotel Awards as The Americas’ Most
            Romantic Retreat, Hasbrouck House is centered around an 18th century
            Dutch Colonial stone mansion in the historic hamlet of Stone Ridge,
            NY.
          </p>
          <p className={styles.contact_text}>
            <strong>Inness</strong>
          </p>
          <p className={styles.contact_text}>
            Situated between the Catskill and Shawangunk mountain ranges,
            discover 220 pastoral acres. Home to a hotel, restaurant, golf,
            tennis, swimming pool and abundant leisure activities.
          </p>
          <p className={styles.contact_text}>
            <strong>Arrowood</strong>
          </p>
          <p className={styles.contact_text}>
            A sustainably-minded farm brewery, distillery, and event destination
            in the beautiful and bountiful Hudson Valley.
          </p>
          <p className={styles.contact_text}>
            <strong>Goodnight Woodstock</strong>
          </p>
          <p className={styles.contact_text}>
            One of our favorite go-to date night or just because restaurants.{" "}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </CenterContent>
      </div>
    </>
  );
};

export default Home;
