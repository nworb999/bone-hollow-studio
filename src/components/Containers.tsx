import styles from "../styles/home.module.css";
import { LayoutProps } from "../types";

export function LeftContent({ children }: LayoutProps) {
  return (
    <>
      <div className={styles.article_style}>
        <div className={styles.text_right}>{children}</div>
      </div>
    </>
  );
}

export function RightContent({ children }: LayoutProps) {
  return (
    <>
      {" "}
      <div className={styles.article_style}>
        <div className={styles.text_left}>{children}</div>
      </div>
    </>
  );
}

export function MediaContent({ children }: LayoutProps) {
  return (
    <>
      {" "}
      <div className={styles.media_style}>
        <div className={styles.text_left}>{children}</div>
      </div>
    </>
  );
}

export function CenterContent({ children }: LayoutProps) {
  return (
    <>
      {" "}
      <div className={styles.article_style}>
        <div className={styles.center_text}>{children}</div>
      </div>
    </>
  );
}
