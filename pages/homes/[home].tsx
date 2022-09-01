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
import LeafButton from "../../components/leafbutton";
import Script from "next/script";

export const config = {
  unstable_includeFiles: [
    "node_modules/next/dist/compiled/@edge-runtime/primitives/**/*.+(js|json)",
  ],
};

const formatName = ({ name }: { name?: HomeType }) => {
  if (name) {
    const result = name.replace(/([A-Z])/g, " $1");
    return result.charAt(0) + result.slice(1).toLowerCase();
  }
};

const Home: NextPage = () => {
  const router = useRouter();

  const [home] = homesArray.filter(
    ({ name }) => name === router.asPath.toString().replace("/homes/", "")
  );

  return (
    <>
      <div id="empty-div-row"></div>
      <CenterContent>
        <h1>{formatName({ name: home?.name })}</h1>{" "}
      </CenterContent>
      <Script src="transparent.js" strategy="lazyOnload" />
      <div className={styles.main_style}>
        <div className={styles.section_style}>
          <LeftContent>
            <Image
              alt={
                home?.coverImageArray ? home.coverImageArray[0]?.altText : ""
              }
              src={
                home?.coverImageArray
                  ? home.coverImageArray[0]?.image
                  : fallBackPhoto
              }
              width={500}
              height={500}
              objectFit="cover"
            />
          </LeftContent>
          <RightContent>
            <p className={styles.small_bold_text}>
              {home?.topText ? home.topText : ""}
            </p>
          </RightContent>
        </div>
      </div>
      <div className={styles.article_style}>
        <div id="coverPhoto" className={styles.home_cover}>
          {" "}
          <Image
            alt={home?.coverImageArray ? home.coverImageArray[0]?.altText : ""}
            src={
              home?.coverImageArray
                ? home.coverImageArray[0]?.image
                : fallBackPhoto
            }
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
              alt={home?.imageArray ? home.imageArray[0]?.altText : ""}
              src={home?.imageArray ? home.imageArray[0]?.image : fallBackPhoto}
              width={500}
              height={500}
              objectFit="cover"
            />
          </LeftContent>
          <RightContent>
            <p className={styles.small_bold_text}>
              {home?.textRight ? home.textRight : ""}
            </p>
          </RightContent>
          <LeftContent>
            <p className={styles.small_bold_text}>
              {home?.textLeft ? home.textLeft : ""}
            </p>
          </LeftContent>
          <RightContent>
            <Image
              alt={home?.imageArray ? home.imageArray[1]?.altText : ""}
              src={home?.imageArray ? home.imageArray[1]?.image : fallBackPhoto}
              width={500}
              height={500}
              objectFit="cover"
            />
          </RightContent>
        </div>
      </div>
      <div className={styles.article_style}>
        <div id="coverPhoto" className={styles.home_cover}>
          {" "}
          <Image
            alt={home?.coverImageArray ? home.coverImageArray[0]?.altText : ""}
            src={
              home?.coverImageArray
                ? home.coverImageArray[0]?.image
                : fallBackPhoto
            }
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.main_style}>
        {" "}
        <CenterContent>
          <Image
            alt={home?.coverImageArray ? home.coverImageArray[1]?.altText : ""}
            src={
              home?.coverImageArray
                ? home.coverImageArray[1]?.image
                : fallBackPhoto
            }
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </CenterContent>
      </div>
      <CenterContent>
        <LeafButton text="back to other projects"></LeafButton>
      </CenterContent>
    </>
  );
};

export default Home;
