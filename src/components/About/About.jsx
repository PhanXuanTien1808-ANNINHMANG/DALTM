import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Thông tin </h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/anh.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Cá nhân</h3>
              <p>
              <div className=""></div>  Em tên là Phan Xuân Tiến, năm nay 21 tuổi và hiện tại là sinh viên ngành Công Nghệ Thông Tin, chuyên ngành An Ninh Mạng
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Sở thích</h3>
              <p>
              - Bóng đá, đặc biệt em là Manucian<br />
              - Sưu tầm truyện tranh<br />
              - Thích đi tìm tòi những thứ mới<br />
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Ước mơ</h3>
              <p>
               - Em muốn bản thân trở nên hoàn thiện hơn<br />
               - Học lên bằng thạc sĩ<br />
               - Có được một công việc ổn định
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
