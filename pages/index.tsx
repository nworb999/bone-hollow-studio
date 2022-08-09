import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import poolhouse from "../public/assets/angled-pool-house.jpg";
import beads from "../public/assets/beads.jpg";
import fireplace from "../public/assets/fireplace.jpg";
import couch from "../public/assets/couch.jpg";
import hoya from "../public/assets/hoya.jpg";
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
        <article>
          <div className={styles.big_bold_text}>
            <p>
              bone hollow studio is a boutique development company located in
              Ulster County
            </p>
          </div>
        </article>
        <section>
          <article>
            <Image
              alt="poolhouse shot"
              src={beads}
              width={500}
              height={500}
              objectFit="cover"
            />
          </article>
          <article>
            <p className={styles.bold_text}>
              each home is designed and built with the surroundings taking the
              lead role
            </p>
            <p className={styles.bold_text}>
              the result is a combination of rural tranquility and custom design
            </p>
          </article>
        </section>
      </main>
      <article>
        <div className={styles.home_cover}>
          <Image
            alt="poolhouse shot"
            src={poolhouse}
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </div>
      </article>
      <main>
        <section>
          <article>
            <p className={styles.bold_text}>
              bone hollow studio is deeply committed to integrity, client
              service and creative design solutions
            </p>
            <p className={styles.bold_text}>
              Erika brings her urban sophistication and true love of the land,
              nature, people, and art to inspire refined living solutions in
              this rural landscape
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
          <article>
            <p className={styles.bold_text}>
              the spaces we create are characterized by luxurious textures,
              quality materials, and a minimalistic style, because we believe
              that the way your home feels is just as significant as how it
              looks
            </p>
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
          <article>
            <p className={styles.bold_text}>
              our work is founded in the belief that form and function are both
              requisite for a well-designed home{" "}
            </p>
            <p className={styles.bold_text}>
              we apply that perspective to projects of every size, from
              furnishings to new builds
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

        <article>
          <p className={styles.big_bold_text}>
            with our curated interiors, every element can build a dialogue
            <br />
            the spaces we live in give us a protected and intimate feeling. In
            an uncertain world, home is the calm in a turbulent sea
            <br />
            <br />
            <br />
            <br />
          </p>
        </article>
      </main>
    </>
  );
};

export default Home;
