import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";
import { aboutImageArray, aboutTextArray } from "../constants";
import {
  CenterContent,
  LeftContent,
  RightContent,
} from "../components/Containers";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>about</title>
      </Head>
      {/* <Script src="transparent.js" strategy="lazyOnload" /> */}
      <div className={styles.main_style}>
        {/* <div id="empty-div-row"></div> */}
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
            <div>
              <ul>
                <li>
                  <u>
                    <a href="https://www.timesunion.com/hudsonvalley/realestate/article/bone-hollow-studio-female-developer-17751308.php">
                      The female developer behind a $2M home that sold in a day
                    </a>
                  </u>
                </li>
              </ul>
            </div>
          </RightContent>
        </div>
        <p className={styles.header_text} style={{ marginBottom: "2rem" }}>
          Erika Brown
        </p>
        <p
          className={styles.small_header_text}
          style={{ marginBottom: "2rem" }}
        >
          owner
        </p>
        <div className={styles.section_style}>
          <RightContent>
            <div>
              <p className={styles.small_bold_text}>{aboutTextArray[2]}</p>
              <p className={styles.small_bold_text}>{aboutTextArray[3]}</p>
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
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
