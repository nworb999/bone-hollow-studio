import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import fall from "../../public/assets/poolhouse/fall1.jpg";
import spring1 from "../../public/assets/poolhouse/spring1.jpg";
import spring2 from "../../public/assets/poolhouse/spring2.jpg";
import aerial from "../../public/assets/poolhouse/aerial.jpg";
import entrance from "../../public/assets/181bonehollow/entrance.jpeg";
import hall from "../../public/assets/181bonehollow/hall.jpeg";
import front from "../../public/assets/181bonehollow/front.jpg";
import mirror from "../../public/assets/181bonehollow/mirror.jpg";

import styles from "../../styles/Home.module.css";
import Script from "next/script";

export enum HomeType {
  poolHouse = "poolHouse",
  oneEightOne = "oneEightOne",
}

interface Home {
  name: HomeType;
  thumbnailPhoto: HomeImage;
  coverPhoto: HomeImage;
  photoArray: HomeImage[];
  footerPhoto: HomeImage;
}

interface HomeImage {
  image: StaticImageData;
  altText: string;
}

export const homesArray: Home[] = [
  {
    name: HomeType.poolHouse,
    thumbnailPhoto: { image: aerial, altText: "placeholder" },
    coverPhoto: { image: aerial, altText: "placeholder" },
    photoArray: [
      { image: spring1, altText: "placeholder" },
      { image: spring2, altText: "placeholder" },
    ],
    footerPhoto: { image: fall, altText: "placeholder" },
  },
  {
    name: HomeType.oneEightOne,
    coverPhoto: { image: entrance, altText: "placeholder" },
    thumbnailPhoto: { image: entrance, altText: "placeholder" },
    photoArray: [
      { image: front, altText: "placeholder" },
      { image: hall, altText: "placeholder" },
    ],
    footerPhoto: { image: mirror, altText: "placeholder" },
  },
];

const Homes: NextPage = () => {
  const router = useRouter();

  const handleClick = ({ home }: { home: Home }) =>
    router.push({
      pathname: `/homes/${home.name}`,
    });

  return (
    <>
      <Script src="transparent.js" strategy="lazyOnload" />
      <main>
        <Head>
          <title>bone hollow studio - homes</title>
        </Head>
        <div id="empty-div-row"></div>
        <section className={styles.section}>
          {homesArray.map((home, i) => (
            <article className={styles.article} key={i}>
              <Link
                href={`/homes/${encodeURIComponent(
                  home.name ? home.name : `${HomeType.poolHouse}`
                )}`}
                passHref
                key={i}
              >
                <a
                  onClick={() => handleClick({ home })}
                  key={i}
                  href={`/homes/${encodeURIComponent(
                    home.name ? home.name : `${HomeType.poolHouse}`
                  )}`}
                  ref={`/homes/${encodeURIComponent(
                    home.name ? home.name : `${HomeType.poolHouse}`
                  )}`}
                >
                  <Image
                    alt={home.thumbnailPhoto.altText}
                    src={home.thumbnailPhoto.image}
                    width={500}
                    height={300}
                    objectFit="contain"
                    key={i}
                  />
                </a>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Homes;
