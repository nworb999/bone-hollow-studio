import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Script from "next/script";
import styles from "../../styles/Home.module.css";
import { homesArray } from ".";
import fallBackPhoto from "../../public/assets/poolhouse/spring1.jpg";

const Home: NextPage = () => {
  const router = useRouter();
  console.log(router.asPath);
  const [home] = homesArray.filter(
    ({ name }) => name === router.asPath.toString().replace("/homes/", "")
  );
  console.log({ home });
  return (
    <>
      <Script src="transparent.js" strategy="lazyOnload" />
      <main className={styles.main}>
        <article className={styles.article}>
          {" "}
          <div id="coverPhoto" className={styles.home_cover}>
            {" "}
            <Image
              alt="Catskills"
              src={home?.coverPhoto.image ?? fallBackPhoto}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </article>
        <div id="empty-div-row"></div>
      </main>
      <main className={styles.main}>
        <section className={styles.section}>
          <article className={styles.article}>
            <Image
              alt="fall shot with dark brown pool house in the foreground, shot from the side"
              src={home?.photoArray[0].image ?? fallBackPhoto}
              width={500}
              height={500}
              objectFit="cover"
            />
          </article>
          <article className={styles.article}>
            <h2>
              with our curated interiors, every element can build a dialogue
            </h2>
            <h2>
              we strive for homes characterized by restrained, neutral palettes
              and an elegant minimalism that allow details to shine
            </h2>
          </article>
          <article className={styles.article}>
            <h2>
              the spaces we live in give us a protected and intimate feeling
            </h2>
            <h2>in an uncertain world, home is the calm in a turbulent sea</h2>
          </article>
          <article className={styles.article}>
            <Image
              alt="headshot"
              src={home?.photoArray[1].image ?? fallBackPhoto}
              width={500}
              height={500}
              objectFit="cover"
            />
          </article>
        </section>
        <main className={styles.main}>
          <article className={styles.article}>
            <div id="coverPhoto" className={styles.home_cover}>
              <Image
                alt="Catskills"
                src={home?.footerPhoto.image ?? fallBackPhoto}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </article>
        </main>
      </main>
    </>
  );
};

export default Home;
