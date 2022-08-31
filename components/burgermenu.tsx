import Head from "next/head";
import { LayoutProps } from "../src/types";
import Link from "next/link";
import { slide as Menu, State } from "react-burger-menu";
import navStyles from "../styles/navbar.module.css";
import styles from "../styles/footer.module.css";
import { useRouter } from "next/router";

import React, { useState, useContext } from "react";
interface MenuState extends State {
  toggleMenu?: () => void;
  stateChangeHandler?: (newState: MenuState) => void;
}

// make a new context
const MyContext = React.createContext<MenuState>({ isOpen: false });

// create the provider
const MyProvider = (props: LayoutProps) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState: MenuState) =>
          setMenuOpenState(newState.isOpen ? newState.isOpen : false),
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

// create a button that calls a context function to set a new open state when clicked
const Button = () => {
  const ctx = useContext(MyContext);
  return <button onClick={ctx.toggleMenu}>Toggle menu</button>;
};

// create a navigation component that wraps the burger menu
const Navigation = ({ children }: LayoutProps) => {
  const ctx = useContext(MyContext);
  const handleClick = () => {
    document.body.classList.add("transparent-nav");
  };
  const router = useRouter();
  return (
    <Menu
      noOverlay
      customBurgerIcon={
        <div className={styles.huge_bold_text}>
          <Link href="/">
            <a
              onClick={handleClick}
              className={router.pathname == "/" ? "active" : ""}
            >
              bone hollow studio
            </a>
          </Link>
        </div>
      }
      isOpen={ctx.isOpen}
      onStateChange={(state) => ctx.stateChangeHandler?.(state)}
    >
      {children}
    </Menu>
  );
};

export default function BurgerMenu() {
  const handleClick = () => {
    document.body.classList.add("transparent-nav");
  };
  const router = useRouter();
  return (
    <>
      <Head>
        <title>bone hollow studio</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="/leaf.svg"
          className="invert(68%) sepia(9%) saturate(467%) hue-rotate(64deg) brightness(93%) contrast(89%)"
        ></link>
      </Head>
      <MyProvider>
        <div>
          <Navigation>
            <main id="page-wrap">
              <div className={navStyles.nav_about}>
                <Link href="/about" className="menu-item">
                  <a
                    onClick={handleClick}
                    className={router.pathname == "/about" ? "active" : ""}
                  >
                    about
                  </a>
                </Link>
              </div>
              <div className={navStyles.nav_homes}>
                <Link href="/homes" className="menu-item">
                  <a
                    onClick={handleClick}
                    className={
                      router.pathname.includes("/homes") ? "active" : ""
                    }
                  >
                    homes
                  </a>
                </Link>
              </div>

              <div className={navStyles.nav_hudson_valley}>
                <Link href="/hudsonValley" className="menu-item">
                  <a
                    onClick={handleClick}
                    className={
                      router.pathname == "/hudsonValley" ? "active" : ""
                    }
                  >
                    hudson valley
                  </a>
                </Link>
              </div>
              <div className={navStyles.nav_contact}>
                <Link href="/contact" className="menu-item">
                  <a
                    onClick={handleClick}
                    className={router.pathname == "/contact" ? "active" : ""}
                  >
                    contact
                  </a>
                </Link>
              </div>
            </main>
          </Navigation>
        </div>
      </MyProvider>
    </>
  );
}
