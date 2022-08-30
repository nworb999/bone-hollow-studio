import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/home.module.css";
import { Home, HomeType } from "../src/types";

export default function HomeButton({
  home,
  index,
}: {
  home: Home;
  index: number;
}) {
  const router = useRouter();
  const handleClick = ({ home }: { home: Home }) =>
    router.push({
      pathname: `/homes/${home.name}`,
    });
  return (
    <div className={styles.article_style}>
      <div>
        <Link
          href={`/homes/${encodeURIComponent(
            home.name ? home.name : `${HomeType.poolHouse}`
          )}`}
          as={`/homes/${encodeURIComponent(
            home.name ? home.name : `${HomeType.poolHouse}`
          )}`}
          passHref
          key={index}
        >
          <a
            onClick={() => handleClick({ home })}
            key={index}
            href={`/homes/${encodeURIComponent(
              home.name ? home.name : `${HomeType.poolHouse}`
            )}`}
            ref={`/homes/${encodeURIComponent(
              home.name ? home.name : `${HomeType.poolHouse}`
            )}`}
          >
            <Image
              alt={home.thumbnailImage.altText}
              src={home.thumbnailImage.image}
              width={1000}
              height={800}
              layout="responsive"
              objectFit="contain"
              key={index}
            />
          </a>
        </Link>
        <div className={styles.section_style}>
          {" "}
          <p className={styles.text_left}>
            {home.thumbnailCaption} <br />
          </p>
        </div>
      </div>
    </div>
  );
}
