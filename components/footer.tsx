import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_title}>
          <p>bone hollow</p>
        </div>
        <div className={styles.footer_contact}>
          <p>contact</p>
          <Link href={"mailto:erika@bonehollow.studio"}>
            erika@bonehollow.studio
          </Link>
        </div>
        <div className={styles.footer_social}>
          <p>social</p>
          <Link href={"https://www.instagram.com/bonehollowstudio/"} passHref>
            <a target="_blank" rel="noopener noreferrer">
              instagram
            </a>
          </Link>
          <p>facebook</p>
        </div>
        <div className={styles.footer_copyright}>
          © copyright bone hollow llc
        </div>
      </footer>
    </>
  );
}
