import React, { useEffect, useRef, useState } from "react";
import styles from "./Card.module.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Card = ({
  data: { title, description, image, techStack, liveLink, githubLink },
}) => {
  const imgRef = useRef(null);
  const isIntersecting = useIntersectionObserver(imgRef);

  const techString = techStack.join("");
  return (
    <div className={styles.card}>
      <div className={styles["img-container"]}>
        <img ref={imgRef} src={isIntersecting ? image : ""} alt={title} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <div className={styles.stack}>
          <strong>Built with</strong>: <span>{techString}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.social}>
          <a href={liveLink}>Live</a>
          <a href={githubLink}>Code</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
