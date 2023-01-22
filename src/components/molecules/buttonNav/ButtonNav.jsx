import Button from "../../atoms/button/Button"
import styles from "./buttonNav.module.css"
import { ReactComponent as LeftArrowIcon } from "../../../assets/arrow_left.svg"
import { ReactComponent as RightArrowIcon } from "../../../assets/arrow_right.svg"


export default function ButtonNav({i, setAcvtiveArticle}) {

    function handleLeft() {
        
    }

    function handleRight() {
        
    }

    return(
        <div className={styles.container}>
            <Button >
                <LeftArrowIcon className={styles.arrowStyles} handle={handleLeft} i={i}/>
            </Button>

            <Button>
                <RightArrowIcon className={styles.arrowStyles} handle={handleRight} i={i}/>
            </Button>
        </div>
    )
}