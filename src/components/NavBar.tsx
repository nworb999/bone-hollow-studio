import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import navStyles from "../styles/navbar.module.css";

export default function NavBar() {

  const router = useRouter();
  return (
    <>
      <nav className={navStyles.navbg}>
        <div className={navStyles.about}>
          <Link href="/about">
            <a

              className={router.pathname == "/about" ? "active" : ""}
            >
              <div className={navStyles.small_text}>about</div>
            </a>
          </Link>
        </div>
        <div className={navStyles.homes}>
          <Link href="/projects">
            <a

              className={router.pathname.includes("/projects") ? "active" : ""}
            >
              <div className={navStyles.small_text}>projects</div>
            </a>
          </Link>
        </div>
        <div className={navStyles.title}>
          <Link href="/">
            <a>
              <div className={navStyles.big_text}>bone hollow studio</div>
            </a>
          </Link>
        </div>
        <div className={navStyles.hudson_valley}>
          <Link href="/hudsonValley">
            <a
              className={router.pathname == "/hudsonValley" ? "active" : ""}
            >
              <div className={navStyles.small_text}>hudson valley</div>
            </a>
          </Link>
        </div>
        <div className={navStyles.contact}>
          <Link href="/contact">
            <a
              className={router.pathname == "/contact" ? "active" : ""}
            >
              <div className={navStyles.small_text}>contact</div>
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
}

