import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import fall from "../public/assets/accord-fall-172.jpg";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <article className={styles.article}>
            {" "}
            <div id="coverPhoto" className={styles.home_cover}>
              {" "}
              <Image
                alt="Catskills"
                src={fall}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default Home;
