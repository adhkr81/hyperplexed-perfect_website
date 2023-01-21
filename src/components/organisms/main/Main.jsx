import styles from "./main.module.css"
import data from "../../../ultilities/data.json"

import ButtonNav from "../../molecules/buttonNav/ButtonNav"
import Title from "../../molecules/title/Title"
import Paragraph from "../../atoms/paragraph/Paragraph"


export default function Main () {

    return (
        <main>
            {data.map((current) => {
                return (
                <article>
                    <div style={{ backgroundImage: `${current.image}`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat" }} className={`${styles.articleImageSection} ${styles.articleSection}`}>
                    </div>
                    <div className={`${styles.articleDescriptionSection} ${styles.articleSection}`}>
                        <Paragraph data={current.description}/>
                    </div>
                    <div className={`${styles.articleTitleSection} ${styles.articleSection}`}>
                        <Title data={current.title}/>
                    </div>
                    <div className={`${styles.articleNavSection} ${styles.articleSection}`}>
                        <ButtonNav />
                    </div>
                </article>
                )
            })}

        </main>
    )
}