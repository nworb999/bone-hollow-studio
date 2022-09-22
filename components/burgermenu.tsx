import { LayoutProps } from "../src/types";
import Link from "next/link";
import { slide as Menu, State } from "react-burger-menu";
import navStyles from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { createGzip } from "zlib";

interface MenuProps {}

interface MenuState {
  menuOpen: boolean;
}

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

const HomeButton = () => {
  return (
    <div className={navStyles.burger_title}>
      <Link href="/" passHref>
        <a className={navStyles.big_text}>bone hollow studio</a>
      </Link>
    </div>
  );
};

export class BurgerMenu extends React.Component<MenuProps, MenuState> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state: any) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <div className={navStyles.burger_icon}>
        <HomeButton />
        <Menu
          noOverlay
          customBurgerIcon={<HamburgerIcon />}
          width={"100%"}
          burgerButtonClassName={navStyles.burger}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <div className={navStyles.hamburger_sidebar} id="page-wrap">
            <div className={navStyles.nav_about}>
              <Link href="/about" passHref>
                <a>about</a>
              </Link>
            </div>
            <div className={navStyles.nav_homes}>
              <Link href="/projects" passHref>
                <a>projects</a>
              </Link>
            </div>
            <div className={navStyles.nav_hudson_valley}>
              <Link href="/hudsonValley" passHref>
                <a>hudson valley</a>
              </Link>
            </div>
            <div className={navStyles.nav_contact}>
              <Link href="/contact" passHref>
                <a>contact</a>
              </Link>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}
