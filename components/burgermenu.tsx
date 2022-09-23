import { LayoutProps } from "../src/types";
import Link from "next/link";
import { slide as Menu, State } from "react-burger-menu";
import navStyles from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { createGzip } from "zlib";

interface MenuState extends State {
  toggleMenu?: () => void;
  stateChangeHandler?: (newState: MenuState) => void;
}

// hamburger menu
const HamburgerIcon = () => {
  return (
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
};

// make a new context
const MyContext = React.createContext<MenuState>({ isOpen: false });

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
        customBurgerIcon={<HamburgerIcon />}
        isOpen={ctx.isOpen}
        onStateChange={ctx.toggleMenu}
        width={"100%"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        {children}
      </Menu>
    </div>
  );
};

export default function BurgerMenu() {
  const ctx = useContext(MyContext);
  return (
    <>
      <div className={navStyles.burger_container} id="outer-container">
        <HomeButton />

        <Navigation>
          <div className={navStyles.hamburger_sidebar} id="page-wrap">
            <div className={navStyles.nav_about}>
              <Link href="/about">
                <a>about</a>
              </Link>
            </div>
            <div className={navStyles.nav_homes}>
              <Link href="/projects">
                <a>projects</a>
              </Link>
            </div>
            <div className={navStyles.nav_hudson_valley}>
              <Link href="/hudsonValley">
                <a>hudson valley</a>
              </Link>
            </div>
            <div className={navStyles.nav_contact}>
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </div>
          </div>
        </Navigation>
      </div>
    </>
  );
}
