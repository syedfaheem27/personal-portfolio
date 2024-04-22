import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <a
        href="https://drive.google.com/file/d/1BnQn5mhsG1-O8Ku5zRQAk4WxA8OnxLsP/view?usp=sharing"
        target="blank"
        className={styles.resume}
      >
        <img src="./assets/outline-logos/resume.png" alt="" />
      </a>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src="./assets/outline-logos/cover-logo.jpg" alt="own image" />
        </div>
        <div className={styles.content}>
          <h1>Hi There !</h1>
          <p>
            I'm{" "}
            <span className={styles.name}>
              <strong>Syed Faheem</strong>
            </span>
          </p>
          <p>An Aspiring Web Developer enroute to greatness.</p>
          <Link to="/about">
            <span>Know More</span>
            <span>
              <img src="./assets/outline-logos/prof-logo.png" alt="" />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
