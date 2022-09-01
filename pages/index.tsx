import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import {
  CenterContent,
  LeftContent,
  RightContent,
} from "../components/containers";
import {
  coverPhoto,
  spring,
  flowers,
  screen,
  hoya,
  pool,
  fireplace,
  couch,
} from "../src/images";
import { indexTextArray } from "../src/constants";
import styles from "../styles/home.module.css";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <>
      {" "}
      <Head>
        <title>bone hollow studio - homepage</title>
      </Head>
      <div className={styles.main_style}>
        <div className={styles.article_style}>
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
        </div>
      </div>
      <Script src="transparent.js" strategy="lazyOnload" />
      <div className={styles.main_style}>
        <div id="empty-div-row"></div>
        <CenterContent>
          {/** first text */}
          <p className={styles.huge_bold_text}>{indexTextArray[0]}</p>
        </CenterContent>
        <div className={styles.section_style}>
          <LeftContent>
            {/** second text */}
            <p className={styles.bold_text}>{indexTextArray[1]}</p>
          </LeftContent>
          <RightContent>
            <Image
              alt="poolhouse shot"
              src={spring}
              width={500}
              height={500}
              objectFit="cover"
            />
          </RightContent>
        </div>
      </div>
      <div className={styles.article_style}>
        <div className={styles.home_cover}>
          <Image
            alt="poolhouse shot"
            src={flowers}
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.main_style}>
        <div className={styles.section_style}>
          <LeftContent>
            <Image
              alt="poolhouse shot"
              src={fireplace}
              width={500}
              height={500}
              objectFit="cover"
            />
          </LeftContent>
          <RightContent>
            <p className={styles.bold_text}>{indexTextArray[2]}</p>
            <p className={styles.small_bold_text}>{indexTextArray[3]}</p>
          </RightContent>
        </div>
        <div className={styles.section_style}>
          <LeftContent>
            <p className={styles.small_bold_text}>{indexTextArray[4]}</p>
            <p className={styles.small_bold_text}>{indexTextArray[5]}</p>
          </LeftContent>
          <RightContent>
            <Image
              alt="poolhouse shot"
              src={hoya}
              width={500}
              height={500}
              objectFit="cover"
            />
          </RightContent>
        </div>
      </div>
      <div className={styles.article_style}>
        <div className={styles.home_cover}>
          <Image
            alt="poolhouse shot"
            src={screen}
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.main_style}>
        <div className={styles.section_style}>
          <LeftContent>
            <p className={styles.bold_text}>{indexTextArray[6]}</p>
            <p className={styles.small_bold_text}>{indexTextArray[7]}</p>
          </LeftContent>
          <RightContent>
            <Image
              alt="poolhouse shot"
              src={couch}
              width={500}
              height={500}
              objectFit="cover"
            />
          </RightContent>
        </div>
      </div>
      <div className={styles.article_style}>
        <div className={styles.home_cover}>
          <Image
            alt="poolhouse shot"
            src={pool}
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.main_style}>
        <CenterContent>
          <p className={styles.huge_bold_text}>
            {indexTextArray[8]}
            <br />
            <br />
            {indexTextArray[9]}
            <br />
          </p>
        </CenterContent>
      </div>
    </>
  );
};

export default Home;
