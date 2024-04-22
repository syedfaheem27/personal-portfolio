import { Tech } from "../../data/Tech"
import styles from './Technologies.module.css'
const Technologies = () => {
    return (
        <>
            <h3>Technologies</h3>
            <div className={styles["icon-container"]}>
                {
                    Tech.map((tech, i) => {
                        return <div key={i}>
                            <img src={tech.src} alt={tech.title} />
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Technologies
