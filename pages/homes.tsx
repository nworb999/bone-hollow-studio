import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import fall from "../public/assets/accord-fall-172.jpg";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>bone hollow studio - homes</title>
      </Head>

      <section className={styles.section}>
        <article>
          <Image
            alt="fall shot with dark brown pool house in the foreground, shot from the side"
            src={fall}
            width={500}
            height={300}
            objectFit="contain"
          />
        </article>
        <article>
          <Image
            alt="fall shot with dark brown pool house in the foreground, shot from the side"
            src={fall}
            width={500}
            height={300}
            objectFit="contain"
          />
        </article>
        <article>
          <Image
            alt="fall shot with dark brown pool house in the foreground, shot from the side"
            src={fall}
            width={500}
            height={300}
            objectFit="contain"
          />
        </article>
        <article>
          <Image
            alt="fall shot with dark brown pool house in the foreground, shot from the side"
            src={fall}
            width={500}
            height={300}
            objectFit="contain"
          />
        </article>
      </section>
    </div>
  );
};

export default Home;
