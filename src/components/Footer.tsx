import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_title}>bone hollow studio</div>
        <div className={styles.footer_contact}>
          <h3>contact</h3>
          <Link href={"mailto:erika@bonehollow.studio"}>
            erika@bonehollow.studio
          </Link>
        </div>
        <div className={styles.footer_social}>
          <h3>social</h3>
          <a href="https://www.instagram.com/bonehollowstudio/">
            instagram<br></br>
          </a>
          <a href="https://www.facebook.com/bonehollowstudio">facebook</a>
        </div>
        <div className={styles.footer_copyright}>
          <p>© bone hollow studio llc</p>
          <p>
            {" "}designed by{" "}
            <a href="https://github.com/cy-kim">
              <u>cy kim</u>,
            </a>  built by {" "}<a href="https://nworb.io">
              <u>emma brown</u>
            </a>
          </p>
        </div>

        <div className={styles.footer_tree}>
          <Image
            className={styles.filter_silver}
            src="/tree.svg"
            objectFit="fill"
            width={150}
            alt="silver tree with leaves falling"
            height={150}
          />
        </div>
      </footer>
    </>
  );
}
