import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
const About = () => {
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    if (!showToast) return;

    setTimeout(() => setShowToast(false), 1000);
  }, [showToast]);
  function copyMail(e) {
    const mailId = e.target.textContent.trim();
    navigator.clipboard.writeText(mailId);
    setShowToast(true);
  }
  return (
    <section id="about" className={styles.container}>
      {showToast && <div className={styles.toast}>✅ Email copied.</div>}
      <header>
        <h1>Hi, I'm Syed Faheem </h1>
      </header>
      <section className={styles.content}>
        <p>
          I am a self-taught front-end developer based in India. As someone, who
          has always loved mathematics, I enjoy transforming complex problems
          into simple and intuitive solutions. I love to explore and learn new
          things and i go with the philosophy that i never know anything which
          always keeps me motivated to search for more and never settle for
          less. Currently, most of my endeavours are in javascript and React.js
        </p>
        <p>
          Aside from that, i love <span>reading</span>, <span>football</span>{" "}
          and <span>hitting the gym</span>. When i am not coding, you'll
          probably find me playing football or at the gym as i truly believe
          that keeping the body in good health is our duty, otherwise we shall
          not be able to keep the mind stronger and clear,
        </p>
        <p>
          As someone with a keen interest in tech and a knack for
          problem-solving, web development was an obvious path.
        </p>
        <p>
          Let's get in touch. Write me at{"  "}
          <button onClick={copyMail}>faheem.2719.dev@gmail.com</button>
        </p>
      </section>
      <section id="social-media-handles" className={styles.social}>
        <a href="mailto:syedfaheem132@gmail.com">Mail</a>
        <a href="https://github.com/syedfaheem27">Github</a>
        <a href="https://www.linkedin.com/in/syed-faheem-6285a0261/">
          Linkedin
        </a>
        <a href="https://twitter.com/faheemsyed_1">Twitter</a>
      </section>

      <section id="skills" className={styles.skills}>
        <h2>My Skills</h2>
        <div className={styles.underline}></div>
        <div>
          <h3>Languages</h3>
          <div className={styles["icon-container"]}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>TS</span>
            <span>C</span>
          </div>
        </div>
        <div>
          <h3>Technologies</h3>
          <div className={styles["icon-container"]}>
            <span>React</span>
            <span>Redux</span>
            <span>Bootstrap</span>
            <span>Tailwind</span>
          </div>
        </div>
        <div>
          <h3>Other Tools</h3>
          <div className={styles["icon-container"]}>
            <span>Linux</span>
            <span>Git</span>
            <span>VScode</span>
            <span>npm</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
