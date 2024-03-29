import { LayoutProps } from "../types";
import Link from "next/link";
import { slide as Menu, State } from "react-burger-menu";
import navStyles from "../styles/navbar.module.css";
import React, { useContext } from "react";

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
      height="1.8rem"
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
        width={"min-content"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        burgerButtonClassName={navStyles.burger}
      >
        {children}
      </Menu>
    </div>
  );
};

export default function BurgerMenu() {
  const handleClick = () => {
    document.body.classList.add("transparent-nav");
  };
  return (
    <div>
      <div className={navStyles.burger_container} id="outer-container">
        <HomeButton />

        <Navigation>
          <div className={navStyles.hamburger_sidebar} id="page-wrap">
            <div>
              <Link href="/">
                <a onClick={handleClick}>home</a>
              </Link>
            </div>
            <div>
              <Link href="/about">
                <a onClick={handleClick}>about</a>
              </Link>
            </div>
            <div>
              <Link href="/projects">
                <a onClick={handleClick}>projects</a>
              </Link>
            </div>
            <div>
              <Link href="/hudsonValley">
                <a onClick={handleClick}>hudson valley</a>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <a onClick={handleClick}>contact</a>
              </Link>
            </div>
          </div>
        </Navigation>
      </div>
    </div>
  );
}
