import React, { useRef } from "react";
import styles from "./Card.module.css";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Card = ({
  data: { title, description, image, techStack, liveLink, githubLink },
}) => {
  const imgRef = useRef(null);
  const isIntersecting = useIntersectionObserver(imgRef);

  const techString = techStack.join(", ");
  return (
    <div className={styles.card}>
      <div className={styles["img-container"]}>
        <a href={liveLink} target="blank">
          <img ref={imgRef} src={isIntersecting ? image : ""} alt={title} />
        </a>
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <div className={styles.stack}>
          <strong>Built with</strong>: <span>{techString}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.social}>
          <a href={liveLink} target="blank">
            <img
              src="./assets/outline-logos/monitor.svg"
              alt="Live Link Logo"
            />
          </a>
          <a href={githubLink} target="blank">
            <img
              src="./assets/outline-logos/logo-github.svg"
              alt="Github Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
