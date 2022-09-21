import Image from "next/image";
import Link from "next/link";
import { CenterContent } from "../components/containers";
import styles from "../styles/home.module.css";

export default function LeafButton({
  text,
  href = "/projects",
}: {
  text: string;
  href?: string;
}) {
  return (
    <>
      <CenterContent>
        <div className={styles.leaf_button}>
          <Link href={href} passHref>
            <a className={styles.bold_text}>
              <Image
                className={styles.filter_dark}
                src="/tree.svg"
                objectFit="fill"
                width={150}
                alt="silver tree with leaves falling"
                height={150}
              />
              <p>{text}</p>
            </a>
          </Link>
        </div>
      </CenterContent>
      <CenterContent>
        {
          <p>
            <br />
            <br />
            <br />
          </p>
        }
      </CenterContent>
    </>
  );
}
