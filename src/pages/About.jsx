import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import SocialHandles from "../components/SocialHandles";
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
    <>
      <div className={styles.container}>
        <header>
          <h1>Hi, I'm Syed Faheem </h1>
        </header>
        <section id="about">
          {showToast && <div className={styles.toast}>✅ Email copied.</div>}

          <section className={styles.content}>
            <p>
              I am a self-taught front-end developer based in India. As someone,
              who has always loved mathematics, I enjoy transforming complex
              problems into simple and intuitive solutions. I love to explore
              and learn new things and i go with the philosophy that i never
              know anything which always keeps me motivated to search for more
              and never settle for less. Currently, most of my endeavours are in
              javascript and React.js
            </p>
            <p>
              Aside from that, i love <span>reading</span>,{" "}
              <span>football</span> and <span>hitting the gym</span>. When i am
              not coding, you'll probably find me playing football or at the gym
              as i truly believe that keeping the body in good health is our
              duty, otherwise we shall not be able to keep the mind stronger and
              clear.
            </p>
            <p>
              As someone with a keen interest in tech and a knack for
              problem-solving, web development was an obvious path.
            </p>
            <p>
              Let's get in touch. Write me at{" "}
              <button onClick={copyMail}> faheem.2719.dev@gmail.com</button>
            </p>
          </section>

          <SocialHandles class={styles["add-social"]} />

          <section id="skills" className={styles.skills}>
            <h2>My Skills</h2>
            <div className={styles.underline}></div>
            <div>
              <h3>Languages</h3>
              <div className={styles["icon-container"]}>
                <img src="../solidIcons/HTML_5.svg" alt="HTML5 logo" />
                <img src="../solidIcons/CSS_3.svg" alt="CSS3 logo" />
                <img src="../solidIcons/JS.svg" alt="Java-Script logo" />
                <img src="../solidIcons/C.svg" alt="C Programming logo" />
              </div>
            </div>
            <div>
              <h3>Technologies</h3>
              <div className={styles["icon-container"]}>
                <img src="../solidIcons/react.svg" alt="React logo" />

                <img src="../solidIcons/redux.svg" alt="Redux logo" />

                <img src="../solidIcons/bootstrap.svg" alt="Bootstrap logo" />

                <img src="../solidIcons/tailwind.svg" alt="Tailwind logo" />
              </div>
            </div>
            <div>
              <h3>Other Tools</h3>
              <div className={styles["icon-container"]}>
                <img src="../solidIcons/linux.svg" alt="Linux logo" />

                <img src="../solidIcons/git.svg" alt="Git logo" />

                <img src="../solidIcons/VS-Code.svg" alt="Vs Code logo" />

                <img src="../solidIcons/NPM.svg" alt="Npm logo" />
              </div>
            </div>
          </section>
        </section>
      </div>
      <footer className={styles.footer}>
        <section className={styles.copy}>
          <span>&copy;</span>
          <strong>syed faheem</strong>
        </section>
        <SocialHandles class={styles["social-footer"]} />
      </footer>
    </>
  );
};

export default About;
