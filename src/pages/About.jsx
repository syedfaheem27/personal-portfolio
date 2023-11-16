import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import SocialHandles from "../components/SocialHandles";
import Footer from "../components/Footer";
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
                <div>
                  <img src="./assets/solid-logos/HTML_5.svg" alt="HTML5 logo" />
                </div>
                <div>
                  <img src="./assets/solid-logos/CSS_3.svg" alt="CSS3 logo" />
                </div>
                <div>
                  <img
                    src="./assets/solid-logos/JS.svg"
                    alt="Java-Script logo"
                  />
                </div>
                <div>
                  <img
                    src="./assets/solid-logos/C.svg"
                    alt="C Programming logo"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3>Technologies</h3>
              <div className={styles["icon-container"]}>
                <div>
                  <img src="./assets/solid-logos/react.svg" alt="React logo" />
                </div>
                <div>
                  <img src="./assets/solid-logos/redux.svg" alt="Redux logo" />
                </div>
                <div>
                  <img
                    src="./assets/solid-logos/react-query.svg"
                    alt="React Query logo"
                  />
                </div>
                <div>
                  <img
                    src="./assets/solid-logos/bootstrap.svg"
                    alt="Bootstrap logo"
                  />
                </div>
                <div>
                  <img
                    src="./assets/solid-logos/tailwind.svg"
                    alt="Tailwind logo"
                  />
                </div>
                <div>
                  <img
                    src="./assets/solid-logos/styled-comp.svg"
                    alt="Styled Components logo"
                  />
                </div>
                <div>
                  <img
                    src="./assets/solid-logos/material-ui.svg"
                    alt="Material UI logo"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3>Other Tools</h3>
              <div className={styles["icon-container"]}>
                <div>
                  <img src="./assets/solid-logos/linux.svg" alt="Linux logo" />
                </div>
                <div>
                  <img src="./assets/solid-logos/git.svg" alt="Git logo" />
                </div>
                <div>
                  <img
                    src="./assets/solid-logos/VS-Code.svg"
                    alt="Vs Code logo"
                  />
                </div>
                <div>
                  <img src="./assets/solid-logos/NPM.svg" alt="Npm logo" />
                </div>
                <div>
                  <img
                    src="./assets/solid-logos/postman.svg"
                    alt="Postman logo"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
