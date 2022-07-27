import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import backyard from "../public/assets/poolhouse/aerial.jpg";
import coverPhoto from "../public/assets/clouds1.jpg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
            <h2>
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
            width={1000}
            height={1000}
            objectFit="cover"
          />
        </article>
        <article className={styles.article}>
          <h2>
            each home is designed and built with the surroundings taking the
            lead role
          </h2>
          <h2>
            the result is a combination of rural tranquility and custom design
          </h2>
        </article>
      </main>
      <main className={styles.main}>
        <article className={styles.article}>
          <h2>
            our work is founded in the belief that form and function are both
            requisite for a well-designed home{" "}
          </h2>
          <h2>
            we apply that perspective to projects of every size, from
            furnishings to new builds
          </h2>
          <h2>
            the spaces we create are characterized by luxurious textures,
            quality materials, and a minimalistic style, because we believe that
            the way your home feels is just as significant as how it looks
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
