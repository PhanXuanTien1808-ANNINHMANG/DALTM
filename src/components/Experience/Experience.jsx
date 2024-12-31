import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>CHỨNG CHỈ</h2>
      <div className={styles.content}>
        {/* <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div> */}
        <div className={styles.historyCards}> {/* Thay đổi ở đây */}
          {history.map((historyItem, id) => (
            <div key={id} className={styles.historyItemCard}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                  className={styles.historyItemImage}
                />
                <div className={styles.historyItemCardDetails}>
                     <h3>{`${historyItem.role} `}</h3>
                     {/* <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
                      {/* <p className={styles.historyDescription}>{historyItem.description}</p>  */}
                      {/* Thêm description */}
                   <div className={styles.certificates}>
                       {historyItem.certificates && historyItem.certificates.map((certificate, certificateId) => (
                           <div key={certificateId} className={styles.certificateItem}>
                               <img src={getImageUrl(certificate.imageSrc)} alt={certificate.title || "Certificate"} />
                               {certificate.title && <p>{certificate.title}</p>}
                           </div>
                       ))}
                   </div>
                 </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};