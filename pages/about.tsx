import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";
import { aboutImageArray } from "../src/constants";
import {
  CenterContent,
  LeftContent,
  RightContent,
} from "../components/containers";

const textArray: string[] = [
  `At Bone Hollow Studio we specialize in curated and welcoming
    homes. Through our partnership with renowned local builder,
    Hudson Valley Homes & Renovations, we offer clean and gracious
    motifs that are thoughtfully sited in a quiet, introspective
    setting.`,
  `Erika grew up in Berlin, Germany and the American Midwest. A
    graduate of Northwestern University, she has over 15 years of
    experience in producing commercials and special effects for an
    illustrious client base, amongst them Nike, Coca-Cola,
    McDonald's, Chevrolet, and Anheuser Busch. Erika has also
    worked in development and event planning for non-profits,
    including Jersey Battered Women's Service.
    

    Erika's latest work with the New York-based interior
    designer, Amanda Rehbein Studio, has segued into the creation of
    her company, Bone Hollow Studio. With a background in
    advertising production and styling, Erika combines her passion
    for creative design with a natural aptitude for project
    management. She believes one
    s home should be unique,
    reflecting a deeply personal connection with the land.
    Erika's goal is to create spaces that are at once impactful
    and livable, timeless and comfortable.`,
];

const Home: NextPage = () => {
  return (
    <>
      {" "}
      <Head>
        <title>bone hollow studio - about</title>
      </Head>
      <div id="empty-div-row"></div>
      <main>
        <CenterContent>
          <p className={styles.huge_bold_text}>who we are</p>
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
            <p className={styles.small_bold_text}>{textArray[0]}</p>
          </RightContent>
          <LeftContent>
            <p id="ownerPara1" className={styles.small_bold_text}>
              {textArray[1]}
            </p>
          </LeftContent>
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
      </main>
    </>
  );
};

export default Home;
