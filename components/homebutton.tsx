import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import homeStyles from "../styles/homes.module.css";
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
    <article className={styles.article} key={index}>
      <div className={homeStyles.project_container}>
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
              width={500}
              height={300}
              objectFit="contain"
              key={index}
            />
          </a>
        </Link>
        <section className={styles.section}>
          {" "}
          <p className={styles.text_left}>
            {home.thumbnailCaption} <br />
          </p>
          {/* <p className={styles.text_right}>100 square feet</p> */}
        </section>
      </div>
    </article>
  );
}
