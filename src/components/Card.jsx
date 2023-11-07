import React from "react";
import styles from "./Card.module.css";

const Card = ({ data: { title, description, image, techStack } }) => {
  const techString = techStack.join("");
  return (
    <div className={styles.card}>
      <div className={styles["img-container"]}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <div className={styles.stack}>
          <strong>Built with</strong>: <span>{techString}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.social}>
          <a href="#">Live</a>
          <a href="#">Code</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
