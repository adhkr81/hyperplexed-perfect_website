import styles from "./main.module.css"
import ButtonNav from "../../molecules/buttonNav/ButtonNav"
import Title from "../../molecules/title/Title"

export default function Main () {

    return (
        <main>
            <article>
                <div style={{ backgroundImage: "url(/img/japan.jpg)",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat" }} className={`${styles.articleImageSection} ${styles.articleSection}`}>
                </div>
                <div className={`${styles.articleDescriptionSection} ${styles.articleSection}`}>
                    <p>Tokyo, formerly (until 1868) Edo, city and capital of Tokyo to (metropolis) and of Japan. </p>
                </div>
                <div className={`${styles.articleTitleSection} ${styles.articleSection}`}>
                    <Title />
                </div>
                <div className={`${styles.articleNavSection} ${styles.articleSection}`}>
                    <ButtonNav />
                </div>
            </article>

            <article></article>
            <article></article>
            <article></article>
            <article></article>
        </main>
    )
}