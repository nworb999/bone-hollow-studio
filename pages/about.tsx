import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";
import { aboutImageArray, aboutTextArray } from "../src/constants";
import {
  CenterContent,
  LeftContent,
  RightContent,
} from "../components/containers";
import Script from "next/script";
import LeafButton from "../components/leafbutton";

const Home: NextPage = () => {
  return (
    <>
      {" "}
      <Head>
        <title>bone hollow studio - about</title>
      </Head>
      <Script src="transparent.js" strategy="lazyOnload" />
      <div className={styles.main_style}>
        <div id="empty-div-row"></div>
        <CenterContent>
          <p className={styles.header_text}>who we are</p>
        </CenterContent>{" "}
        <div className={styles.section_style}>
          <LeftContent>
            <Image
              alt={aboutImageArray[0].altText}
              src={aboutImageArray[0].image}
              width={500}
              height={500}
              objectFit="cover"
            />
          </LeftContent>
          <RightContent>
            <p className={styles.small_bold_text}>{aboutTextArray[0]}</p>
            <p className={styles.small_bold_text}>{aboutTextArray[1]}</p>
          </RightContent>

          <RightContent>
            <div className={styles.article_style}>
              <div>
                <p className={styles.header_text}>Erika Brown</p>
                <p className={styles.small_header_text}>owner</p>
              </div>
              <div>
                <p className={styles.small_bold_text}>{aboutTextArray[2]}</p>
                <p className={styles.small_bold_text}>{aboutTextArray[3]}</p>
              </div>
            </div>
          </RightContent>
          <RightContent>
            <Image
              alt={aboutImageArray[1].altText}
              src={aboutImageArray[1].image}
              width={500}
              height={500}
              objectFit="cover"
            />
          </RightContent>
        </div>
        <CenterContent>
          <LeafButton text="browse projects"></LeafButton>
        </CenterContent>
      </div>
    </>
  );
};

export default Home;
