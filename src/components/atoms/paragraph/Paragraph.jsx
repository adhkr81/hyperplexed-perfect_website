import styles from "./paragraph.module.css"

export default function Paragraph({data}) {

    return(
        <div className={styles.container}>
            <p>
                {data}
            </p>
        </div>
    )
}