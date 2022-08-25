import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import flowers from "../public/assets/poolhouse/flowers.jpg";
import fireplace from "../public/assets/fireplace.jpg";
import couch from "../public/assets/couch.jpg";
import hoya from "../public/assets/hoya.jpg";
import pool from "../public/assets/poolhouse/pool.jpg";
import spring from "../public/assets/poolhouse/spring1.jpg";
import coverPhoto from "../public/assets/livingroom.jpg";
import screen from "../public/assets/screen.jpg";
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
        <article>
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
      <main>
        <article className={styles.huge_bold_text}>
          <div>
            <p>
              Bone Hollow Studio is the meeting of rural tranquility and custom
              design
            </p>
          </div>
        </article>
        <section>
          <article className={styles.text_left}>
            <p className={styles.bold_text}>
              Located in Accord, NY, we specialize in curated and welcoming
              homes.
            </p>
          </article>
          <article>
            <Image
              alt="poolhouse shot"
              src={spring}
              width={500}
              height={500}
              objectFit="cover"
            />
          </article>
        </section>
      </main>
      <article>
        <div className={styles.home_cover}>
          <Image
            alt="poolhouse shot"
            src={flowers}
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </div>
      </article>
      <main>
        <section>
          <article>
            <Image
              alt="poolhouse shot"
              src={fireplace}
              width={500}
              height={500}
              objectFit="cover"
            />
          </article>
          <article className={styles.text_left}>
            <p className={styles.bold_text}>A boutique development company</p>
            <p className={styles.small_bold_text}>
              Our work is founded on the belief that form and function are the
              sine qua non of a well-designed home.
            </p>
          </article>
        </section>
        <section>
          <article className={styles.text_right}>
            <p className={styles.small_bold_text}>
              We apply that perspective to projects of every size, from
              furnishings to new builds.
            </p>
            <p className={styles.small_bold_text}>
              The spaces we create are characterized by luxurious textures,
              quality materials, and a minimalistic style, because we believe
              that the way your home feels is just as significant as how it
              looks.
            </p>
          </article>
          <article>
            <Image
              alt="poolhouse shot"
              src={hoya}
              width={500}
              height={500}
              objectFit="cover"
            />
          </article>
        </section>
      </main>
      <article>
        <div className={styles.home_cover}>
          <Image
            alt="poolhouse shot"
            src={screen}
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </div>
      </article>
      <main>
        <section>
          <article className={styles.text_right}>
            <p className={styles.bold_text}>
              In collaboration with local craftsmen
            </p>
            <p className={styles.small_bold_text}>
              Through our partnership with a renowned local builder, Jeromy
              Wells, of <i>Hudson Valley Homes & Renovations,</i> we offer clean
              and gracious motifs that are thoughtfully sited in a quiet,
              introspective setting.
            </p>
          </article>
          <article>
            <Image
              alt="poolhouse shot"
              src={couch}
              width={500}
              height={500}
              objectFit="cover"
            />
          </article>
        </section>
      </main>
      <article>
        <div className={styles.home_cover}>
          <Image
            alt="poolhouse shot"
            src={pool}
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </div>
      </article>
      <main>
        <article className={styles.huge_bold_text}>
          <p>
            The spaces we live in give us a protected and intimate feeling.{" "}
          </p>{" "}
          <p>
            In an uncertain world, home is the calm in a turbulent sea.
            <br />
            <br />
          </p>
        </article>
      </main>
    </>
  );
};

export default Home;
