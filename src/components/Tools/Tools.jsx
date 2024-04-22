import { Tools as _Tools } from "../../data/Tools"
import styles from './Tools.module.css';

const Tools = () => {
    return (
        <>
            <h3>Other Tools</h3>
            <div className={styles["icon-container"]}>
                {
                    _Tools.map((tool, i) => {
                        return <div key={i}>
                            <img src={tool.src} alt={tool.title} />
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Tools
