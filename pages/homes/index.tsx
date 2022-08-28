import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import HomeButton from "../../components/homebutton";
import { handleSyntaxError } from "../../src/utils";
import styles from "../../styles/Home.module.css";
import homeStyles from "../../styles/homes.module.css";
import Script from "next/script";
import { Home, HomeType } from "../../src/types";
import { homesArray } from "../../src/constants";

const Homes: NextPage = () => {
  const router = useRouter();

  const handleClick = ({ home }: { home: Home }) =>
    router.push({
      pathname: `/homes/${home.name}`,
    });

  return (
    <>
      <Script
        src="transparent.js"
        strategy="lazyOnload"
        onError={handleSyntaxError}
      />
      <main>
        <Head>
          <title>bone hollow studio - homes</title>
        </Head>
        <div id="empty-div-row"></div>
        <article>
          <h1 className={styles.huge_bold_text}>projects</h1>
        </article>
        <section className={styles.section}>
          {homesArray.map((home, i) => (
            <HomeButton home={home} index={i} key={i} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Homes;
