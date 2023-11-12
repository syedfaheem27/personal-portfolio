import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <>
      <div
        className={`${styles["hamburger-menu"]} ${isOpen ? styles.open : ""} `}
        onClick={() => setIsOpen((op) => !op)}
      >
        <span className={styles["hamburger-top"]}></span>
        <span className={styles["hamburger-middle"]}></span>
        <span className={styles["hamburger-bottom"]}></span>
      </div>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <NavLink to="/" className={styles.logo}>
            <img src="./assets/outline-logos/own-img.jpeg" alt="Own image" />
          </NavLink>
          <ul className={styles["nav-list"]}>
            <Navigation />
          </ul>
        </nav>
      </div>
      {isOpen && (
        <section id="modile-menu" className={styles["menu-container"]}>
          <ul className={styles.menu}>
            <Navigation />
          </ul>
          <Footer />
        </section>
      )}
    </>
  );
};

export default NavBar;
