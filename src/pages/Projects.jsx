import React from "react";
import styles from "./Projects.module.css";
import Card from "../components/Card";
import { mockData } from "../data/project-data";
import Footer from "../components/Footer";
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
          <span>Load more</span>
          <span>%Icon%</span>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
