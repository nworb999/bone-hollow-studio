import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_title}>bone hollow</div>
        <Image
          className={styles.filter_bone}
          src="/tree.svg"
          objectFit="fill"
          width={100}
          height={100}
        />
        <div className={styles.footer_contact}>
          <h3>contact</h3>
          <Link href={"mailto:erika@bonehollow.studio"}>
            erika@bonehollow.studio
          </Link>
        </div>
        <div className={styles.footer_social}>
          <h3>social</h3>
          <Link href={"https://www.instagram.com/bonehollowstudio/"} passHref>
            <a target="_blank" rel="noopener noreferrer">
              instagram <br></br>
            </a>
          </Link>
          <Link href={"https://www.instagram.com/bonehollowstudio/"} passHref>
            <a target="_blank" rel="noopener noreferrer">
              facebook
            </a>
          </Link>
        </div>
        <div className={styles.footer_copyright}>
          © copyright bone hollow llc
        </div>
      </footer>
    </>
  );
}
