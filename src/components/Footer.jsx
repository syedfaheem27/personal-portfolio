import React from "react";
import styles from "./Footer.module.css";
import SocialHandles from "./SocialHandles";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.copy}>
        <span>&copy;</span>
        <strong>syed faheem</strong>
      </section>
      <SocialHandles class={styles["social-footer"]} />
    </footer>
  );
};

export default Footer;
