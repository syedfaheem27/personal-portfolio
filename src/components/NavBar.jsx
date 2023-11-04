import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/about" className={styles.logo}>
          <img src="../assets/own-img.jpeg" alt="Own image" />
        </NavLink>
        <div
          className={`${styles["hamburger-menu"]} ${
            isOpen ? styles.open : ""
          } `}
          onClick={() => setIsOpen((op) => !op)}
        >
          <span className={styles["hamburger-top"]}></span>
          <span className={styles["hamburger-middle"]}></span>
          <span className={styles["hamburger-bottom"]}></span>
        </div>
        <ul className={styles["nav-list"]}>
          <li>
            {" "}
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="resume"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <section id="modile-menu" className={styles["menu-container"]}>
          <ul className={styles.menu}>
            <li>
              {" "}
              <NavLink
                to="about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Projects
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="resume"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default NavBar;
