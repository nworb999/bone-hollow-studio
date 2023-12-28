import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/home.module.css";
import footerStyles from "../../styles/footer.module.css";
import Content from "../../components/Content"
import { fallBackImage } from "../../images";
import { projectsArray } from "../../constants";
import Script from "next/script";
import { formatName, useWindowSize } from "../../utils";
import Head from "next/head";

export const config = {
  unstable_includeFiles: [
    "node_modules/next/dist/compiled/@edge-runtime/primitives/**/*.+(js|json)",
  ],
};

const Home: NextPage = () => {
  const router = useRouter();

  const handleTextString = (text?: string | string[]) => {
    if (Array.isArray(text)) {
      return text.map((paragraph, i) => <p key={i}>{paragraph}</p>);
    } else return text || "";
  };

  const [home] = projectsArray.filter(
    ({ name }) => name === router.asPath.toString().replace("/projects/", "")
  );

  const size = useWindowSize();
  const mobileOrderFlag = size.width && size.width < 600 ? true : false;
  return (
    <>
      <Head>
        <title>{formatName({ name: home?.name }) ?? "homes"}</title>
      </Head>
      <div id="empty-div-row"></div>
      <Script src="transparent.js" strategy="lazyOnload" />
      <div className={styles.article_style}>
        <Content alignment="center">
          <p className={styles.header_text}>
            {formatName({ name: home?.name })}
          </p>
        </Content>
      </div>
      <div className={styles.section_style}>
        <Content alignment="left">
          <Image
            alt={home?.imageArray ? home.imageArray[0]?.altText : ""}
            src={home?.imageArray ? home.imageArray[0]?.image : fallBackImage}
            width={500}
            height={500}
            objectFit="cover"
            priority
          />
        </Content>
        <Content alignment="right">
          <p className={styles.small_bold_text}>
            <em>{home?.creditTextArray ? home.creditTextArray[0] : ""}</em>

            <em>{home?.creditTextArray ? home.creditTextArray[1] : ""}</em>

            <em>{home?.creditTextArray ? home.creditTextArray[2] : ""}</em>
          </p>
          <br />
          <p className={styles.small_bold_text}>
            {home?.topText ? home.topText : ""}
          </p>
        </Content>
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
          priority
        />
      </div>
      <div className={styles.section_style}>
        {mobileOrderFlag ? (
          <Content alignment="right">
            <p className={styles.bold_text}>
              {handleTextString(home?.textRight)}
            </p>
          </Content>
        ) : (
          <Content alignment="left">
            <Image
              alt={home?.imageArray ? home.imageArray[1]?.altText : ""}
              src={home?.imageArray ? home.imageArray[1]?.image : fallBackImage}
              width={500}
              height={500}
              objectFit="cover"
              priority
            />
          </Content>
        )}
        {mobileOrderFlag ? (
          <Content alignment="left">
            {" "}
            <Image
              alt={home?.imageArray ? home.imageArray[1]?.altText : ""}
              src={home?.imageArray ? home.imageArray[1]?.image : fallBackImage}
              width={500}
              height={500}
              objectFit="cover"
              priority
            />{" "}
          </Content>
        ) : (
          <Content alignment="right">
            <p className={styles.bold_text}>
              {handleTextString(home?.textRight)}
            </p>
          </Content>
        )}
        {mobileOrderFlag ? (
          <Content alignment="right">
            <p className={styles.bold_text}>
              {handleTextString(home?.textLeft)}
            </p>
          </Content>
        ) : (
          <Content alignment="left">
            <p className={styles.bold_text}>
              {handleTextString(home?.textLeft)}
            </p>
          </Content>
        )}
        <Content alignment="right">
          <Image
            alt={home?.imageArray ? home.imageArray[2]?.altText : ""}
            src={home?.imageArray ? home.imageArray[2]?.image : fallBackImage}
            width={500}
            height={500}
            objectFit="cover"
            priority
          />
        </Content>
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
          priority
        />
      </div>

      <div className={footerStyles.footer_image}>
        <Content alignment="center">
          {
            <Image
              alt={home?.footerImage ? home.footerImage?.altText : ""}
              src={home?.footerImage ? home.footerImage?.image : fallBackImage}
              width={500}
              height={500}
              objectFit="cover"
              priority
            />
          }
        </Content>
      </div>
    </>
  );
};

export default Home;
