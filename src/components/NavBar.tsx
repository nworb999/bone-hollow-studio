import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import navStyles from "../styles/navbar.module.css";

export default function NavBar() {

  const [scrollTop, setScrollTop] = useState(0);
  const [headerClr, setHeaderClr] = useState(false);

  const num: number = 10;

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= num ? setHeaderClr(true) : setHeaderClr(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);

  }, [scrollTop]);


  const handleClick = () => {
    document.body.classList.add("transparent-nav");
  };

  const router = useRouter();
  return (
    <>
      <nav className={headerClr ? 'navbg' : ''}>
        <div className={navStyles.about}>
          <Link href="/about">
            <a
              onClick={handleClick}
              className={router.pathname == "/about" ? "active" : ""}
            >
              <div className={navStyles.small_text}>about</div>
            </a>
          </Link>
        </div>
        <div className={navStyles.homes}>
          <Link href="/projects">
            <a
              onClick={handleClick}
              className={router.pathname.includes("/projects") ? "active" : ""}
            >
              <div className={navStyles.small_text}>projects</div>
            </a>
          </Link>
        </div>
        <div className={navStyles.title}>
          <Link href="/">
            <a onClick={handleClick}>
              <div className={navStyles.big_text}>bone hollow studio</div>
            </a>
          </Link>
        </div>
        <div className={navStyles.hudson_valley}>
          <Link href="/hudsonValley">
            <a
              onClick={handleClick}
              className={router.pathname == "/hudsonValley" ? "active" : ""}
            >
              <div className={navStyles.small_text}>hudson valley</div>
            </a>
          </Link>
        </div>
        <div className={navStyles.contact}>
          <Link href="/contact">
            <a
              onClick={handleClick}
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
