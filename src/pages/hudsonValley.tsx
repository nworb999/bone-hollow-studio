import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { CenterContent } from "../components/containers";
import { hudsonValleyImageArray } from "../constants";
import Image from "next/image";
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
        <div className={styles.home_cover}>
          <Image
            alt={hudsonValleyImageArray[0].altText}
            src={hudsonValleyImageArray[0].image}
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
            height="100vh"
            width="100vw"
          />
        </div>
        <div className={styles.contact_container}>
          <CenterContent>
            <p className={styles.small_header_text}>recreation</p>
            <p className={styles.contact_text}>
              <strong>
                <u>
                  <a href="https://www.belleayre.com/">Bellayre</a>
                </u>
              </strong>
            </p>
            <p className={styles.contact_text}>
              Convenience and local charm. Not just for skiing -- during the
              summer, there is hiking, swimming and even disc golf.
            </p>

            <p className={styles.contact_text}>
              <strong>
                <u>
                  <a href="https://parks.ny.gov/parks/minnewaska">
                    Minnewaska State Park
                  </a>
                </u>
              </strong>
            </p>
            <p className={styles.contact_text}>
              Minnewaska State Park is full of wonderful trails, lakes and
              waterfalls. Cross country skiing and snow shoe trails in the
              winter.
            </p>

            <p className={styles.contact_text}>
              <strong>
                <u>
                  <a href="https://ulstercountyny.gov/">Ulster County</a>
                </u>
              </strong>
            </p>
            <p className={styles.contact_text}>
              Ulster County has done an amazing job creating rail trails that
              are bike and hike ready.
            </p>
          </CenterContent>
        </div>
        <div className={styles.contact_container}>
          <CenterContent>
            <p className={styles.small_header_text}>food and lodging</p>
            <p className={styles.contact_text}>
              <strong>
                <u>
                  <a href="https://www.hasbrouckhouseny.com/">
                    Hasbrouck House
                  </a>
                </u>
              </strong>
            </p>
            <p className={styles.contact_text}>
              Named by the World Boutique Hotel Awards as The Americas’ Most
              Romantic Retreat, Hasbrouck House is centered around an 18th
              century Dutch Colonial stone mansion in the historic hamlet of
              Stone Ridge, NY.
            </p>
            <p className={styles.contact_text}>
              <strong>
                <u>
                  <a href="https://inness.co/">Inness</a>
                </u>
              </strong>
            </p>
            <p className={styles.contact_text}>
              Situated between the Catskill and Shawangunk mountain ranges,
              discover 220 pastoral acres. Home to a hotel, restaurant, golf,
              tennis, swimming pool and abundant leisure activities.
            </p>
            <p className={styles.contact_text}>
              <strong>
                <u>
                  <a href="https://arrowoodfarms.com/">Arrowood</a>
                </u>
              </strong>
            </p>
            <p className={styles.contact_text}>
              A sustainably-minded farm brewery, distillery, and event
              destination in the beautiful and bountiful Hudson Valley.
            </p>
            <p className={styles.contact_text}>
              <strong>
                <u>
                  <a href="https://www.goodnightwoodstock.com/">
                    Goodnight Woodstock
                  </a>
                </u>
              </strong>
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
            </p>
          </CenterContent>
        </div>
      </div>
    </>
  );
};

export default Home;
