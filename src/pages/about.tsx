import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";
import { aboutImageArray, aboutTextArray } from "../constants";
import Content from "../components/Content"
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>about</title>
      </Head>
      <Script src="transparent.js" strategy="lazyOnload" />
      <div className={styles.main_style}>
        <div id="empty-div-row"></div>
        <Content alignment="center">
          <p className={styles.header_text}>who we are</p>
        </Content>{" "}
        <div className={styles.section_style}>
          <Content alignment="left">
            <Image
              alt={aboutImageArray[0].altText}
              src={aboutImageArray[0].image}
              width={500}
              height={500}
              objectFit="cover"
              priority
            />
          </Content>
          <Content alignment="right">
            <p className={styles.small_bold_text}>{aboutTextArray[0]}</p>
            <p className={styles.small_bold_text}>{aboutTextArray[1]}</p>
            <p>
              <ul>
                <li>
                  <u>
                    <a href="https://www.timesunion.com/hudsonvalley/realestate/article/bone-hollow-studio-female-developer-17751308.php">
                      The female developer behind a $2M home that sold in a day
                    </a>
                  </u>
                </li>
              </ul>
            </p>
          </Content>
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
          <Content alignment="right">
            <div>
              <p className={styles.small_bold_text}>{aboutTextArray[2]}</p>
              <p className={styles.small_bold_text}>{aboutTextArray[3]}</p>
            </div>
          </Content>
          <Content alignment="right">
            <Image
              alt={aboutImageArray[1].altText}
              src={aboutImageArray[1].image}
              width={500}
              height={500}
              objectFit="cover"
            />
          </Content>
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
