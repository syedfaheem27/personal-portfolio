import React from "react";
import styles from "./Projects.module.css";
import Card from "../components/Card";
const mockData = [
  {
    id: 1,
    title: "Project-1",
    image:
      "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["React", "Redux", "React-Query", "Supabase"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum doloremque ipsam tempore quibusdam omnis laboriosam expedita fuga explicabo laudantium?",
  },
  {
    id: 2,
    title: "Project-2",
    image:
      "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["React", "Redux", "React-Query", "Supabase"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum doloremque ipsam tempore quibusdam omnis laboriosam expedita fuga explicabo laudantium?",
  },
  {
    id: 3,
    title: "Project-3",
    image:
      "https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["React", "Redux", "React-Query", "Supabase"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum doloremque ipsam tempore quibusdam omnis laboriosam expedita fuga explicabo laudantium?",
  },
];
const Projects = () => {
  return (
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
  );
};

export default Projects;
