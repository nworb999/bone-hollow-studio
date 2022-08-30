import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../../styles/home.module.css";
import { HomeType } from "../../src/types";
import { homesArray } from "../../src/constants";
import fallBackPhoto from "../../public/assets/poolhouse/spring1.jpg";
import {
  CenterContent,
  LeftContent,
  RightContent,
} from "../../components/containers";

export const config = {
  unstable_includeFiles: [
    "node_modules/next/dist/compiled/@edge-runtime/primitives/**/*.+(js|json)",
  ],
};

const Home: NextPage = () => {
  const router = useRouter();
  console.log(router.asPath);
  const [home] = homesArray.filter(
    ({ name }) => name === router.asPath.toString().replace("/homes/", "")
  );
  console.log({ home });
  return (
    <>
      {/* <div id="empty-div-row"></div> */}
      <CenterContent>
        <h1>{HomeType.poolHouse}</h1>{" "}
      </CenterContent>
      <div className={styles.main_style}>
        <div className={styles.section_style}>
          <LeftContent>
            <Image
              alt="poolhouse shot"
              src={home?.coverImage.image ?? fallBackPhoto}
              width={500}
              height={500}
              objectFit="cover"
            />
          </LeftContent>
          <RightContent>
            <p className={styles.bold_text}>
              In collaboration with local craftsmen
            </p>
            <p className={styles.small_bold_text}>
              Through our partnership with a renowned local builder, Jeromy
              Wells, of <i>Hudson Valley Homes & Renovations,</i> we offer clean
              and gracious motifs that are thoughtfully sited in a quiet,
              introspective setting.
            </p>
          </RightContent>
        </div>
      </div>
      <div className={styles.article_style}>
        <div id="coverPhoto" className={styles.home_cover}>
          {" "}
          <Image
            alt="Catskills"
            src={home?.coverImage.image ?? fallBackPhoto}
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.main_style}>
        <div className={styles.section_style}>
          <div className={styles.article_style}>
            <Image
              alt="fall shot with dark brown pool house in the foreground, shot from the side"
              src={home?.imageArray[0].image ?? fallBackPhoto}
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>
          <div className={styles.article_style}>
            <h2>
              with our curated interiors, every element can build a dialogue
            </h2>
            <h2>
              we strive for homes characterized by restrained, neutral palettes
              and an elegant minimalism that allow details to shine
            </h2>
          </div>{" "}
          <div className={styles.article_style}>
            <h2>
              the spaces we live in give us a protected and intimate feeling
            </h2>
            <h2>in an uncertain world, home is the calm in a turbulent sea</h2>
          </div>
          <div className={styles.article_style}>
            <Image
              alt="headshot"
              src={home?.imageArray[1].image ?? fallBackPhoto}
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
