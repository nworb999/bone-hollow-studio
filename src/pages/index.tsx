import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Content from "../components/Content"
import DynamicContent from '../components/DynamicContent';
import { indexTextArray, indexImageArray } from "../constants";
import styles from "../styles/home.module.css";

const Home: NextPage = () => {

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
      <Content alignment="center">
        <p className={styles.huge_bold_text}>{indexTextArray[0]}</p>
      </Content>
      <div className={styles.section_style}>
        <DynamicContent render={mobileOrderFlag => (
          mobileOrderFlag ? (
            <Content alignment="right">
              <p className={styles.bold_text}>{indexTextArray[1]}</p>
            </Content>
          ) : (
            <Content alignment="right">
              <Image
                alt={indexImageArray[1].altText}
                src={indexImageArray[1].image}
                width={500}
                height={500}
                objectFit="cover"
                priority
              />
            </Content>
          )
        )} />

        <DynamicContent render={mobileOrderFlag => (mobileOrderFlag ? (
          <Content alignment="right">
            <Image
              alt={indexImageArray[1].altText}
              src={indexImageArray[1].image}
              width={500}
              height={500}
              objectFit="cover"
              priority
            />
          </Content>
        ) : (
          <Content alignment="right">
            <p className={styles.bold_text}>{indexTextArray[1]} </p>
          </Content>
        ))} />
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
        <DynamicContent render={mobileOrderFlag => (mobileOrderFlag ? (
          <Content alignment="right">
            <p className={styles.bold_text}>{indexTextArray[2]}</p>
            <p></p>
            <p className={styles.small_bold_text}>{indexTextArray[3]}</p>
          </Content>
        ) : (
          <Content alignment="left">
            <Image
              alt={indexImageArray[3].altText}
              src={indexImageArray[3].image}
              width={500}
              height={500}
              objectFit="cover"
              priority
            />
          </Content>
        ))} />
        <DynamicContent render={mobileOrderFlag => (mobileOrderFlag ? (
          <Content alignment="right">
            <Image
              alt={indexImageArray[3].altText}
              src={indexImageArray[3].image}
              width={500}
              height={500}
              objectFit="cover"
              priority
            />
          </Content>
        ) : (
          <Content alignment="right">
            <p className={styles.bold_text}>{indexTextArray[2]}</p>
            <p></p>
            <p className={styles.small_bold_text}>{indexTextArray[3]}</p>
          </Content>
        ))} />
      </div>
      <div className={styles.section_style}>
        <DynamicContent render={mobileOrderFlag => (mobileOrderFlag ? (
          <Content alignment="right">
            <p className={styles.bold_text}>{indexTextArray[4]}</p>
            <p></p>
            <p className={styles.small_bold_text}>{indexTextArray[5]}</p>
          </Content>
        ) : (
          <Content alignment="left">
            <p className={styles.bold_text}>{indexTextArray[4]}</p>
            <p></p>
            <p className={styles.small_bold_text}>{indexTextArray[5]}</p>
          </Content>
        ))} />
        <Content alignment="right">
          <Image
            alt={indexImageArray[4].altText}
            src={indexImageArray[4].image}
            width={500}
            height={500}
            objectFit="cover"
            priority
          />
        </Content>
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
        <DynamicContent render={mobileOrderFlag => (mobileOrderFlag ? (
          <Content alignment="right">
            <p className={styles.bold_text}>{indexTextArray[6]}</p>
            <p></p>
            <p className={styles.small_bold_text}>{indexTextArray[7]}</p>
          </Content>
        ) : (
          <Content alignment="left">
            <p className={styles.bold_text}>{indexTextArray[6]}</p>
            <p></p>
            <p className={styles.small_bold_text}>{indexTextArray[7]}</p>
          </Content>
        ))} />
        <Content alignment="right">
          <Image
            alt={indexImageArray[6].altText}
            src={indexImageArray[6].image}
            width={500}
            height={500}
            objectFit="cover"
          />
        </Content>
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
      <Content alignment="center">
        <div className={styles.bottom_page_text}>
          <p className={styles.huge_bold_text}>{indexTextArray[8]}</p>
        </div>
      </Content>
    </>
  );
};

export default Home;
