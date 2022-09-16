import NavBar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import { useWindowSize } from "../src/utils";
import { LayoutProps } from "../src/types";
import styles from "../styles/home.module.css";

import BurgerMenu from "./burgermenu";

export default function Layout({ children }: LayoutProps) {
  const size = useWindowSize();
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/leaf.svg"
          className="invert(68%) sepia(9%) saturate(467%) hue-rotate(64deg) brightness(93%) contrast(89%)"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo&family=Inconsolata&family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.container}>
        {size.width && size.width < 910 ? <BurgerMenu /> : <NavBar />}
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
