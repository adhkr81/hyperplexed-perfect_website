import styles from "./title.module.css"
import { ReactComponent as PlusIcon } from "../../../assets/plus.svg"


export default function Title({data}) {

    return (
        <div className={styles.container}>
            <h1>{data}</h1>
            <PlusIcon className={styles.arrowStyles} />
        </div>
    )
}