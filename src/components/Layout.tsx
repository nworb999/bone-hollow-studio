import NavBar from "./NavBar";
import Footer from "./Footer";
import { useWindowSize } from "../utils";
import { LayoutProps } from "../types";
import styles from "../styles/home.module.css";

import BurgerMenu from "./BurgerMenu";

export default function Layout({ children }: LayoutProps) {
  const size = useWindowSize();
  return (
    <>
      <div className={styles.container}>
        {size.width && size.width < 910 ? <BurgerMenu /> : <NavBar />}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
