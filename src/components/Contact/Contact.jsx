import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Liên hệ</h2>
        <p>Hãy liên hệ tui</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">xuantien1808.cntt@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/facebook_images.jpg")}
            alt="LinkedIn icon"
          />
          <a href="https://www.facebook.com/xuantien.phan.182">Phan Xuân Tiến</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/PhanXuanTien1808-ANNINHMANG">PhanXuanTien1808-ANNINHMANG</a>
        </li>
      </ul>
    </footer>
  );
};
