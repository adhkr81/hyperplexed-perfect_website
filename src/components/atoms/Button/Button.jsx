import styles from "./button.module.css"

export default function Button ({children, handle}) {
    
    return(
        <button className={styles.button} onClick={handle}>
            {children}
        </button>
    )
}