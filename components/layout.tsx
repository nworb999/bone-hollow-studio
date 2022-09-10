import NavBar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import Script from "next/script";
import { LayoutProps } from "../src/types";
import styles from "../styles/home.module.css";
import { useEffect, useState } from "react";
import BurgerMenu from "./burgermenu";

interface SetWindowSizeProps {
  width: undefined | number;
  height: undefined | number;
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<SetWindowSizeProps>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // only execute all the code below in client side
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== "undefined") {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

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
