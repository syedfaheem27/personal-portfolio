import React from "react";
import styles from "./SocialHandles.module.css";
import { SocialHandlesList } from "../../data/SocialHandles";

const SocialHandles = (props) => {
  return (
    <section className={`${styles.social} ${props.class}`}>
      {
        SocialHandlesList.map((handle, i) => {
          return <a key={i} href={handle.href}>
            <img src={handle.src} alt={handle.alt} />
          </a>
        })
      }
    </section>
  );
};

export default SocialHandles;
