import type { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import styles from "../styles/Home.module.css";
import spring1 from "../public/assets/poolhouse/spring1.jpg";
import spring2 from "../public/assets/poolhouse/spring2.jpg";
import fall1 from "../public/assets/poolhouse/fall1.jpg";
import aerial from "../public/assets/poolhouse/aerial.jpg";
import entrance from "../public/assets/181bonehollow/entrance.jpeg";
import hall from "../public/assets/181bonehollow/hall.jpeg";
import front from "../public/assets/181bonehollow/front.jpg";
import mirror from "../public/assets/181bonehollow/mirror.jpg";

export enum HomeType {
  poolHouse = "poolHouse",
  oneEightOne = "oneEightOne",
}

const HomePhotos: HomePhoto[] = [
  {
    name: HomeType.poolHouse,
    coverPhoto: aerial,
    photoArray: [spring1, spring2],
    footerPhoto: fall1,
  },
  {
    name: HomeType.oneEightOne,
    coverPhoto: entrance,
    photoArray: [hall, front],
    footerPhoto: mirror,
  },
];

interface HomePhoto {
  name: HomeType;
  coverPhoto: StaticImageData;
  photoArray: StaticImageData[];
  footerPhoto: StaticImageData;
}

const Home: NextPage = () => {
  return (
    <>
      <div id="empty-div-row"></div>
      <div className={styles.container}>
        <main className={styles.main}>
          <article className={styles.article}>
            {" "}
            <div id="coverPhoto" className={styles.home_cover}>
              {" "}
              <Image
                alt="Catskills"
                src={aerial}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </article>
        </main>
        <main className={styles.main}>
          <section className={styles.section}>
            <article className={styles.article}>
              <Image
                alt="fall shot with dark brown pool house in the foreground, shot from the side"
                src={spring2}
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
                we strive for homes characterized by restrained, neutral
                palettes and an elegant minimalism that allow details to shine
              </h2>
            </article>
            <article className={styles.article}>
              <h2>
                the spaces we live in give us a protected and intimate feeling
              </h2>
              <h2>
                in an uncertain world, home is the calm in a turbulent sea
              </h2>
            </article>
            <article className={styles.article}>
              <Image
                alt="headshot"
                src={spring1}
                width={500}
                height={500}
                objectFit="cover"
              />
            </article>
          </section>
          <main className={styles.main}>
            <section className={styles.section}>
              <article className={styles.article}>
                {/* <ImageSlider></ImageSlider> */}
              </article>
            </section>
          </main>
        </main>
      </div>
    </>
  );
};

export default Home;
