import { Skills } from '../../data/Skills';
import styles from './Languages.module.css';

const Languages = () => {
  return (
    <>
      <h3>Languages</h3>
      <div className={styles["icon-container"]}>
        {
          Skills.map((skill, i) => {
            return <div key={i}>
              <img src={skill.src} alt={skill.title} />
            </div>
          })
        }
      </div>
    </>
  )
}

export default Languages
