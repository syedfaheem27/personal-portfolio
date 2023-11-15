import React from "react";
import styles from "./Home.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <a
        href="https://drive.google.com/file/d/1Eq2TfbCRBvgYgaQk5XsGrTx36fwjHbDv/view?usp=sharing"
        target="blank"
        className={styles.resume}
      >
        <img src="./assets/outline-logos/cv-resume.svg" alt="" />
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
      <Footer />
    </>
  );
};

export default Home;
