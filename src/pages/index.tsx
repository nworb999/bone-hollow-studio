import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { useWindowSize } from "../utils";
import {
  CenterContent,
  LeftContent,
  RightContent,
} from "../components/Containers";

import { indexTextArray, indexImageArray } from "../constants";
import styles from "../styles/home.module.css";
import Script from "next/script";

const Home: NextPage = () => {
  const size = useWindowSize();
  const mobileOrderFlag = size.width && size.width < 611 ? true : false;

  return (
    <>
      {" "}
      <Head>
        <title>bone hollow studio - homepage</title>
      </Head>
      {/* <Script src="transparent.js" strategy="lazyOnload" /> */}
      <div className={styles.main_style}>
        <Image
          alt={indexImageArray[0].altText}
          src={indexImageArray[0].image}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div id="empty-div-row"></div>
      <CenterContent>
        <p className={styles.huge_bold_text}>{indexTextArray[0]}</p>
      </CenterContent>
      <div className={styles.section_style}>
        {mobileOrderFlag ? (
          <RightContent>
            <p className={styles.bold_text}>{indexTextArray[1]}</p>
          </RightContent>
        ) : (
          <RightContent>
            <Image
              alt={indexImageArray[1].altText}
              src={indexImageArray[1].image}
              width={500}
              height={500}
              objectFit="cover"
              priority
            />{" "}
          </RightContent>
        )}
        {mobileOrderFlag ? (
          <RightContent>
            <Image
              alt={indexImageArray[1].altText}
              src={indexImageArray[1].image}
              width={500}
              height={500}
              objectFit="cover"
              priority
            />
          </RightContent>
        ) : (
          <RightContent>
            <p className={styles.bold_text}>{indexTextArray[1]} </p>
          </RightContent>
        )}
      </div>
      <div className={styles.home_cover}>
        <Image
          alt={indexImageArray[2].altText}
          src={indexImageArray[2].image}
          layout="responsive"
          objectPosition="relative"
          objectFit="cover"
          height="100vh"
          width="100vw"
          priority
        />
      </div>
      <div className={styles.section_style}>
        {mobileOrderFlag ? (
          <RightContent>
            <p className={styles.bold_text}>{indexTextArray[2]}</p>
            <p className={styles.small_bold_text}>{indexTextArray[3]}</p>
          </RightContent>
        ) : (
          <LeftContent>
            <Image
              alt={indexImageArray[3].altText}
              src={indexImageArray[3].image}
              width={500}
              height={500}
              objectFit="cover"
              priority
            />
          </LeftContent>
        )}
        {mobileOrderFlag ? (
          <RightContent>
            <Image
              alt={indexImageArray[3].altText}
              src={indexImageArray[3].image}
              width={500}
              height={500}
              objectFit="cover"
              priority
            />
          </RightContent>
        ) : (
          <RightContent>
            <p className={styles.bold_text}>{indexTextArray[2]}</p>
            <p className={styles.small_bold_text}>{indexTextArray[3]}</p>
          </RightContent>
        )}
      </div>
      <div className={styles.section_style}>
        {mobileOrderFlag ? (
          <RightContent>
            <p className={styles.bold_text}>{indexTextArray[4]}</p>
            <p className={styles.small_bold_text}>{indexTextArray[5]}</p>
          </RightContent>
        ) : (
          <LeftContent>
            <p className={styles.bold_text}>{indexTextArray[4]}</p>
            <p className={styles.small_bold_text}>{indexTextArray[5]}</p>
          </LeftContent>
        )}
        <RightContent>
          <Image
            alt={indexImageArray[4].altText}
            src={indexImageArray[4].image}
            width={500}
            height={500}
            objectFit="cover"
            priority
          />
        </RightContent>
      </div>
      <div className={styles.home_cover}>
        <Image
          alt={indexImageArray[5].altText}
          src={indexImageArray[5].image}
          layout="responsive"
          objectPosition="center"
          objectFit="cover"
          height="100vh"
          width="100vw"
        />
      </div>
      <div className={styles.section_style}>
        {mobileOrderFlag ? (
          <RightContent>
            <p className={styles.bold_text}>{indexTextArray[6]}</p>
            <p className={styles.small_bold_text}>{indexTextArray[7]}</p>
          </RightContent>
        ) : (
          <LeftContent>
            <p className={styles.bold_text}>{indexTextArray[6]}</p>
            <p className={styles.small_bold_text}>{indexTextArray[7]}</p>
          </LeftContent>
        )}
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
      <div className={styles.last_home_cover}>
        <Image
          alt={indexImageArray[7].altText}
          src={indexImageArray[7].image}
          layout="responsive"
          objectPosition="relative"
          objectFit="cover"
          height="100vh"
          width="100vw"
        />
      </div>
      <CenterContent>
        <p className={styles.huge_bold_text}>{indexTextArray[8]}</p>
      </CenterContent>
    </>
  );
};

export default Home;
