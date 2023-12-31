import React from "react";
import styles from "./SocialHandles.module.css";

const SocialHandles = (props) => {
  return (
    <section className={`${styles.social} ${props.class}`}>
      <a href="mailto:syedfaheem132@gmail.com">
        <img src="./assets/outline-logos/mail-outline.svg" alt="Mail" />
      </a>
      <a href="https://github.com/syedfaheem27" target="blank">
        <img src="./assets/outline-logos/logo-github.svg" alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/syed-faheem-6285a0261/"
        target="blank"
      >
        <img src="./assets/outline-logos/logo-linkedin.svg" alt="linked-in" />
      </a>
    </section>
  );
};

export default SocialHandles;
