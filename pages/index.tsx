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

import styles from "../styles/home.module.css";

const textArray: string[] = [
  `Bone Hollow Studio is a design studio creating bespoke structures in the context of rural tranquility`,
  `Located in New York’s Hudson Valley, we specialize in curated and welcoming homes.`,
];

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
      <div id="empty-div-row"></div>
      <div className={styles.main_style}>
        <CenterContent>
          {/** first text */}
          <p className={styles.huge_bold_text}>{textArray[0]}</p>
        </CenterContent>
        <div className={styles.section_style}>
          <LeftContent>
            {/** second text */}
            <p className={styles.bold_text}>{textArray[1]}</p>
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
            <p className={styles.bold_text}>A boutique development company</p>
            <p className={styles.small_bold_text}>
              Our work is founded on the belief that form and function are the
              sine qua non of a well-designed home.
            </p>
          </RightContent>
        </div>
        <div className={styles.section_style}>
          <LeftContent>
            <p className={styles.small_bold_text}>
              We apply that perspective to projects of every size, from
              furnishings to new builds.
            </p>
            <p className={styles.small_bold_text}>
              The spaces we create are characterized by luxurious textures,
              quality materials, and a minimalistic style, because we believe
              that the way your home feels is just as significant as how it
              looks.
            </p>
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
            <p className={styles.bold_text}>
              In collaboration with local craftsmen
            </p>
            <p className={styles.small_bold_text}>
              Through our partnership with a renowned local builder, Jeromy
              Wells, of <i>Hudson Valley Homes & Renovations,</i> we offer clean
              and gracious motifs that are thoughtfully sited in a quiet,
              introspective setting.
            </p>
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
            The spaces we live in give us a protected and intimate feeling.{" "}
            <br />
            <br />
            In an uncertain world, home is the calm in a turbulent sea.
            <br />
          </p>
        </CenterContent>
      </div>
    </>
  );
};

export default Home;
