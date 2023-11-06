import React from "react";
import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>My Projects</h1>
      </header>
      <section className={styles.projects}></section>
    </div>
  );
};

export default Projects;
