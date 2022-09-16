import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/home.module.css";
import { fallBackImage } from "../../src/images";
import { homesArray } from "../../src/constants";

import {
  CenterContent,
  LeftContent,
  RightContent,
} from "../../components/containers";
import LeafButton from "../../components/leafbutton";
import Script from "next/script";
import { formatName, useWindowSize } from "../../src/utils";

export const config = {
  unstable_includeFiles: [
    "node_modules/next/dist/compiled/@edge-runtime/primitives/**/*.+(js|json)",
  ],
};

const Home: NextPage = () => {
  const router = useRouter();

  const [home] = homesArray.filter(
    ({ name }) => name === router.asPath.toString().replace("/homes/", "")
  );
  console.log({ home });
  const size = useWindowSize();
  const mobileOrderFlag = size.width && size.width < 600 ? true : false;
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
              alt={home?.imageArray ? home.imageArray[0]?.altText : ""}
              src={home?.imageArray ? home.imageArray[0]?.image : fallBackImage}
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
                : fallBackImage
            }
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.main_style}>
        <div className={styles.section_style}>
          {/* <LeftContent> */}
          {mobileOrderFlag ? (
            <RightContent>
              <p className={styles.small_bold_text}>
                {home?.textRight ? home.textRight : ""}
              </p>
            </RightContent>
          ) : (
            <LeftContent>
              <Image
                alt={home?.imageArray ? home.imageArray[1]?.altText : ""}
                src={
                  home?.imageArray ? home.imageArray[1]?.image : fallBackImage
                }
                width={500}
                height={500}
                objectFit="cover"
              />
            </LeftContent>
          )}
          {/* </LeftContent> */}
          {/* <RightContent> */}{" "}
          {mobileOrderFlag ? (
            <LeftContent>
              {" "}
              <Image
                alt={home?.imageArray ? home.imageArray[1]?.altText : ""}
                src={
                  home?.imageArray ? home.imageArray[1]?.image : fallBackImage
                }
                width={500}
                height={500}
                objectFit="cover"
              />{" "}
            </LeftContent>
          ) : (
            <RightContent>
              <p className={styles.small_bold_text}>
                {home?.textRight ? home.textRight : ""}
              </p>
            </RightContent>
          )}
          {/* </RightContent> */}
          <LeftContent>
            <p className={styles.small_bold_text}>
              {home?.textLeft ? home.textLeft : ""}
            </p>
          </LeftContent>
          <RightContent>
            <Image
              alt={home?.imageArray ? home.imageArray[2]?.altText : ""}
              src={home?.imageArray ? home.imageArray[2]?.image : fallBackImage}
              width={500}
              height={500}
              objectFit="cover"
            />
          </RightContent>
        </div>
      </div>
      <div className={styles.article_style}>
        <div id="coverPhoto" className={styles.home_cover}>
          <Image
            alt={home?.coverImageArray ? home.coverImageArray[1]?.altText : ""}
            src={
              home?.coverImageArray
                ? home.coverImageArray[1]?.image
                : fallBackImage
            }
            layout="responsive"
            objectPosition="relative"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.main_style}>
        <div className={styles.article_style}>
          <div className={styles.footer_image}>
            <CenterContent>
              {
                <Image
                  alt={home?.footerImage ? home.footerImage?.altText : ""}
                  src={
                    home?.footerImage ? home.footerImage?.image : fallBackImage
                  }
                  width={500}
                  height={500}
                  objectFit="cover"
                />
              }
            </CenterContent>
          </div>
        </div>
        <div className={styles.article_style}>
          <CenterContent>
            <LeafButton text="back to other projects"></LeafButton>
          </CenterContent>
        </div>
      </div>
    </>
  );
};

export default Home;
