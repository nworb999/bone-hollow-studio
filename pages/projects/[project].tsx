import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/home.module.css";
import { fallBackImage } from "../../src/images";
import { projectsArray } from "../../src/constants";

import {
  CenterContent,
  LeftContent,
  RightContent,
} from "../../components/containers";
import Script from "next/script";
import { formatName, useWindowSize } from "../../src/utils";

export const config = {
  unstable_includeFiles: [
    "node_modules/next/dist/compiled/@edge-runtime/primitives/**/*.+(js|json)",
  ],
};

const Home: NextPage = () => {
  const router = useRouter();

  const [home] = projectsArray.filter(
    ({ name }) => name === router.asPath.toString().replace("/projects/", "")
  );
  console.log({ home });
  const size = useWindowSize();
  const mobileOrderFlag = size.width && size.width < 600 ? true : false;
  return (
    <>
      <div id="empty-div-row"></div>
      <Script src="transparent.js" strategy="lazyOnload" />
      <div className={styles.article_style}>
        <CenterContent>
          <p className={styles.header_text}>
            {formatName({ name: home?.name })}
          </p>
        </CenterContent>
      </div>
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
            <em>{home?.creditTextArray ? home.creditTextArray[0] : ""}</em>

            <em>{home?.creditTextArray ? home.creditTextArray[1] : ""}</em>

            <em>{home?.creditTextArray ? home.creditTextArray[2] : ""}</em>
          </p>
          <p className={styles.small_bold_text}>
            {home?.topText ? home.topText : ""}
          </p>
        </RightContent>
      </div>
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
      <div className={styles.section_style}>
        {mobileOrderFlag ? (
          <RightContent>
            <p className={styles.bold_text}>
              {home?.textRight ? home.textRight : ""}
            </p>
          </RightContent>
        ) : (
          <LeftContent>
            <Image
              alt={home?.imageArray ? home.imageArray[1]?.altText : ""}
              src={home?.imageArray ? home.imageArray[1]?.image : fallBackImage}
              width={500}
              height={500}
              objectFit="cover"
            />
          </LeftContent>
        )}
        {mobileOrderFlag ? (
          <LeftContent>
            {" "}
            <Image
              alt={home?.imageArray ? home.imageArray[1]?.altText : ""}
              src={home?.imageArray ? home.imageArray[1]?.image : fallBackImage}
              width={500}
              height={500}
              objectFit="cover"
            />{" "}
          </LeftContent>
        ) : (
          <RightContent>
            <p className={styles.bold_text}>
              {home?.textRight ? home.textRight : ""}
            </p>
          </RightContent>
        )}
        {mobileOrderFlag ? (
          <RightContent>
            <p className={styles.bold_text}>
              {home?.textLeft ? home.textLeft : ""}
            </p>
          </RightContent>
        ) : (
          <LeftContent>
            <p className={styles.bold_text}>
              {home?.textLeft ? home.textLeft : ""}
            </p>
          </LeftContent>
        )}
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
    </>
  );
};

export default Home;
