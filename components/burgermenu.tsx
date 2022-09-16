import { LayoutProps } from "../src/types";
import Link from "next/link";
import Image from "next/image";
import { slide as Menu, State } from "react-burger-menu";
import navStyles from "../styles/navbar.module.css";
import styles from "../styles/footer.module.css";
import { useRouter } from "next/router";

import React, { useState, useContext } from "react";
import { aboutImageArray } from "../src/constants";
import { CenterContent, LeftContent, RightContent } from "./containers";
interface MenuState extends State {
  toggleMenu?: () => void;
  stateChangeHandler?: (newState: MenuState) => void;
}

// hamburger menu
const HamburgerIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    color="#263430"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="3rem"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

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

const HomeButton = () => {
  return (
    <div className={navStyles.burger_title}>
      <Link href="/" passHref>
        <a className={navStyles.big_text}>bone hollow studio</a>
      </Link>
    </div>
  );
};

// create a navigation component that wraps the burger menu
const Navigation = ({ children }: LayoutProps) => {
  const ctx = useContext(MyContext);
  return (
    <div className={navStyles.burger_icon}>
      <Menu
        noOverlay
        disableOverlayClick
        customBurgerIcon={<HamburgerIcon />}
        isOpen={ctx.isOpen}
        onStateChange={(state) => ctx.stateChangeHandler?.(state)}
        width={"100%"}
        burgerButtonClassName={navStyles.burger}
      >
        {children}
      </Menu>
    </div>
  );
};

export default function BurgerMenu() {
  const ctx = useContext(MyContext);
  const handleClick = () => console.log(ctx);
  const router = useRouter();
  return (
    <>
      <div className={navStyles.burger_container}>
        <HomeButton />
        <MyProvider>
          <Navigation>
            <div className={navStyles.hamburger_sidebar} id="page-wrap">
              <div className={navStyles.nav_about}>
                <Link href="/about">
                  <a
                    onClick={handleClick}
                    className={router.pathname == "/about" ? "active" : ""}
                  >
                    about
                  </a>
                </Link>
              </div>
              <div className={navStyles.nav_homes}>
                <Link href="/projects">
                  <a
                    onClick={handleClick}
                    className={
                      router.pathname.includes("/projects") ? "active" : ""
                    }
                  >
                    projects
                  </a>
                </Link>
              </div>
              <div className={navStyles.nav_hudson_valley}>
                <Link href="/hudsonValley">
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
                <Link href="/contact">
                  <a
                    onClick={handleClick}
                    className={router.pathname == "/contact" ? "active" : ""}
                  >
                    contact
                  </a>
                </Link>
              </div>
            </div>
          </Navigation>
        </MyProvider>
      </div>
    </>
  );
}
