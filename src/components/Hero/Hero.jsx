import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Xin chào, Em là Tiến đây, chào mừng mọi người đến với blog của em</h1>
        <p className={styles.description}>
          
        </p>
        <a href="" className={styles.contactBtn}>
          Liên hệ 
        </a>
      </div>
      <img
        src={getImageUrl("hero/2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
