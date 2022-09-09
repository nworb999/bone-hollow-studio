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
            home.name && home.name !== HomeType.four ? home.name : ``
          )}`}
          as={`/homes/${encodeURIComponent(
            home.name && home.name !== HomeType.four ? home.name : ``
          )}`}
          passHref
          key={index}
        >
          <a
            onClick={() => handleClick({ home })}
            key={index}
            href={`/homes/${encodeURIComponent(
              home.name && home.name !== HomeType.four ? home.name : ``
            )}`}
            ref={`/homes/${encodeURIComponent(
              home.name && home.name !== HomeType.four ? home.name : ``
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
          <div className={styles.text_left}>
            <p className={styles.small_bold_text} color="black">
              {home.thumbnailCaption[0]} <br />
              {home.thumbnailCaption[1]}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
