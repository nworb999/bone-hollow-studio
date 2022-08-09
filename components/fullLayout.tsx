import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/Home.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Chivo&family=Inconsolata&family=Open+Sans&display=swap"
        rel="stylesheet"
      ></link>
      <div className={styles.container}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
