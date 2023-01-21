import styles from "./title.module.css"
import { ReactComponent as PlusIcon } from "../../../assets/plus.svg"


export default function Title() {

    return (
        <div className={styles.container}>
            <h1>THIS IS THE TITLE</h1>
            <PlusIcon className={styles.arrowStyles} />
        </div>
    )
}