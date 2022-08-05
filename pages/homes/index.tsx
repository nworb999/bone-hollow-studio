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

export enum HomeType {
  poolHouse = "poolHouse",
  oneEightOne = "oneEightOne",
}

export const homesArray: Home[] = [
  {
    name: HomeType.poolHouse,
    thumbnailPhoto: aerial,
    coverPhoto: aerial,
    photoArray: [spring1, spring2],
    footerPhoto: fall,
  },
  {
    name: HomeType.oneEightOne,
    coverPhoto: entrance,
    thumbnailPhoto: entrance,
    photoArray: [front, hall],
    footerPhoto: mirror,
  },
];

interface Home {
  name: HomeType;
  thumbnailPhoto: StaticImageData;
  coverPhoto: StaticImageData;
  photoArray: StaticImageData[];
  footerPhoto: StaticImageData;
}

const Homes: NextPage = () => {
  const router = useRouter();
  const handleClick = ({ home }: { home: Home }) =>
    router.push({
      pathname: `/homes/${home.name}`,
    });
  return (
    <>
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
                <a onClick={() => handleClick({ home })} key={i}>
                  <Image
                    alt="fall shot with dark brown pool house in the foreground, shot from the side"
                    src={home.thumbnailPhoto}
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
