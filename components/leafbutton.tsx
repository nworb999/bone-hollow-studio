import Image from "next/image";
import Link from "next/link";
import { CenterContent } from "../components/containers";
import styles from "../styles/home.module.css";

export default function LeafButton({
  text,
  href = "/homes",
}: {
  text: string;
  href: string;
}) {
  return (
    <>
      <CenterContent>
        <div>
          <Image
            className={styles.filter_dark}
            src="/tree.svg"
            objectFit="fill"
            width={150}
            alt="silver tree with leaves falling"
            height={150}
          />
        </div>
      </CenterContent>
      <CenterContent>
        <div>
          <Link href={href}>
            <p className={styles.bold_text}>{text}</p>
          </Link>
        </div>
      </CenterContent>
      ;
    </>
  );
}
