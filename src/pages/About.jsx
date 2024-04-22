import { useToast } from "../hooks/useToast";

import SocialHandles from "../components/SocialHandles/SocialHandles";
import Languages from '../components/CodingLangs/Languages';
import Technologies from "../components/Technologies/Technologies";

import styles from "./About.module.css";
import Tools from "../components/Tools/Tools";

const About = () => {
  const [showToast, setShowToast] = useToast()

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
          {showToast &&
            <div className={styles.toast}>✅ Email copied.</div>
          }

          <section className={styles.content}>
            <p>
              As a self-taught front-end developer based in India,
              I'm deeply passionate about translating intricate
              problems into elegant and user-friendly solutions.
              My enthusiasm for mathematics fuels my approach to
              simplifying complexities within web development.
            </p>
            <p>
              Driven by an insatiable curiosity and a belief that there's always more to discover,
              I continuously seek new knowledge. Embracing the philosophy of "never settling,"
              I remain motivated to delve deeper into the realms of technology.
            </p>
            <p>
              Presently, I'm actively engaged in honing my skills in JavaScript and React.js.
              These technologies not only captivate me but also serve as the foundation
              for my current pursuits and future ambitions in the web development landscape.
            </p>
            <p>
              Beyond my passion for coding, I find immense joy in diverse activities.
              <span> Reading</span> is a treasured pastime, expanding my horizons beyond technology.
              <span> Football</span> is my sport of choice, offering exhilarating moments of teamwork and strategy.
              Equally important to me is maintaining a healthy lifestyle, which leads me to the <span>gym</span> regularly.
              I firmly believe that a sound body nurtures a resilient mind, vital for problem-solving and innovation.
            </p>

            <p>
              Driven by a fascination with technology and a natural inclination for tackling challenges,
              venturing into web development was a natural progression for me.
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
              <Languages />
            </div>

            <div>
              <Technologies />
            </div>

            <div>
              <Tools />
            </div>

          </section>
        </section>
      </div>
    </>
  );
};

export default About;
