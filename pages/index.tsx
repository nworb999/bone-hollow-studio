import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import {
  CenterContent,
  LeftContent,
  RightContent,
} from "../components/containers";

import { indexTextArray, indexImageArray } from "../src/constants";
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
              alt={indexImageArray[0].altText}
              src={indexImageArray[0].image}
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
              alt={indexImageArray[1].altText}
              src={indexImageArray[1].image}
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
            alt={indexImageArray[2].altText}
            src={indexImageArray[2].image}
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
              alt={indexImageArray[3].altText}
              src={indexImageArray[3].image}
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
              alt={indexImageArray[4].altText}
              src={indexImageArray[4].image}
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
            alt={indexImageArray[5].altText}
            src={indexImageArray[5].image}
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
              alt={indexImageArray[6].altText}
              src={indexImageArray[6].image}
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
            alt={indexImageArray[7].altText}
            src={indexImageArray[7].image}
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
          </p>
        </CenterContent>
      </div>
    </>
  );
};

export default Home;
