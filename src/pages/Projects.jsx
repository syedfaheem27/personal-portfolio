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
      </div>
      <Footer />
    </>
  );
};

export default Projects;
