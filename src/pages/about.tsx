import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";
import { aboutImageArray, aboutTextArray } from "../constants";
import Content from "../components/Content";
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
            <p></p>
            <p className={styles.small_bold_text}>{aboutTextArray[1]}</p>
          </Content>
        </div>
        <p className={styles.header_text} style={{ marginBottom: "1rem" }}>
          Press
        </p>
        <div className={styles.section_style}>
          <Content alignment="media">
            <div >
              <ul>
                <li>
                  {" "}
                  <u>
                    {" "}
                    <a href="https://www.timesunion.com/hudsonvalley/realestate/article/bone-hollow-studio-female-developer-17751308.php">
                      <em>
                        The female developer behind a $2M home that sold in a day
                      </em>
                    </a>{" "}
                  </u>{" "}
                  <p className={styles.center_text}>
                    &ldquo;Brown is a master of the fine line between luxury and
                    livable. She grew up in Germany and the American Midwest and
                    lived all over before settling in the Hudson Valley. &lsquo;I
                    have never had a strong visceral reaction as I had when I came
                    here. The people, the energy, it’s really special to
                    me.&rsquo;
                  </p>
                  <p className={styles.center_text}>
                    There are some similarities in terms of design choices —
                    Brown’s preferred neutral palette and a penchant for minutiae
                    that make modern feel cozy, but Bone Hollow Studio doesn’t
                    churn out cookie-cutter homes.
                  </p>
                  <p className={styles.center_text}>
                    Female developers like Brown are few and far between.
                    According to{" "}
                    <a href="https://www.zippia.com/real-estate-developer-jobs/demographics/">
                      <strong>
                        an analysis of real-estate developer demographics in the
                        United States by Zippia, a career advising company,
                      </strong>{" "}
                    </a>
                    only 33.1 percent of real estate developers in the U.S. are
                    female. Locally the number is smaller.&rdquo;
                  </p>
                </li>
              </ul>
            </div>
          </Content>{" "}
          <Content alignment="media">
            <div >
              <ul>
                <li>
                  {" "}
                  <u>
                    {" "}
                    <a href="https://themountainsmedia.com/2023/04/escrow-modern-luxe-still-hot/">
                      <em>
                        Bone Hollow Studio had an accepted offer within three days for a really sweet four-bedroom home
                      </em>
                    </a>{" "}
                  </u>{" "}
                  <p className={styles.center_text}>
                    &ldquo;Developer/designer Erika Brown of Bone Hollow Studio
                    had an accepted offer within three days for a really sweet
                    four-bedroom home at 159 Bone Hollow Road in the Ulster County
                    hamlet of Accord. The 3,282-square-foot new house on 5.2 acres
                    was listed for $2.145 million with Laurel Sweeney, of
                    Berkshire Hathaway HomeServices Nutshell Realty in High Falls.
                  </p><p>
                    With superb construction by local builder Hudson Valley Homes
                    & Renovations, the contemporary offers a big-volume great room
                    with 20-foot ceilings, a home office with pond views, stylish,
                    black-framed Marvin windows, a two-car garage and indoor and
                    outdoor fireplaces.&rdquo;
                  </p>
                </li>
              </ul>
            </div>
          </Content>{" "}
        </div>
        <p className={styles.header_text} style={{ marginBottom: "1rem" }}>
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
              <p></p>
              <p className={styles.small_bold_text}>{aboutTextArray[3]}</p>
              <p></p>
              <p className={styles.small_bold_text}>{aboutTextArray[4]}</p>
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
