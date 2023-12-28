import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/home.module.css";
import { Home, HomeType } from "../types";

export default function HomeButton({
  home,
  index,
}: {
  home: Home;
  index: number;
}) {
  const router = useRouter();
  const handleClick = ({ home }: { home: Home }) => {
    router.push({
      pathname: `/projects/${encodeURIComponent(home.name)}`,
    });
  };
  return (
    <div className={styles.article_style}>
      <Link
        href={`/projects/${encodeURIComponent(home.name)}`}
        as={`/projects/${encodeURIComponent(home.name)}`}
        passHref
        key={index}
      >
        <a
          onClick={() => handleClick({ home })}
          key={index}
          href={`/projects/${encodeURIComponent(home.name)}`}
          ref={`/projects/${encodeURIComponent(home.name)}`}
        >
          <Image
            alt={home.thumbnailImage.altText}
            src={home.thumbnailImage.image}
            width={1000}
            height={800}
            layout="responsive"
            objectFit="contain"
            key={index}
            priority
          />
        </a>
      </Link>
      <div className={styles.home_caption}>
        <div className={styles.text_left}>
          <p className={styles.small_bold_text} color="black">
            <b>{home.thumbnailCaption[0]}</b>
            {home.thumbnailCaption[1]}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
