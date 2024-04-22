import React from "react";
import styles from "./Projects.module.css";
import Card from "../components/Card/Card";
import { mockData } from "../data/project-data";
import Footer from "../components/Footer/Footer";
const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <header>
          <h1>My Projects</h1>
        </header>
        <section id="project-cards" className={styles.cards}>
          {mockData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </section>
        <a
          href="https://github.com/syedfaheem27?tab=repositories"
          target="blank"
          className={styles["load-more-btn"]}
        >
          <span>See All</span>
          <img src="./assets/outline-logos/logo-github.svg" alt="Github Logo" />
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
