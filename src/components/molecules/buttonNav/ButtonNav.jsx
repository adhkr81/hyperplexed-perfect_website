import Button from "../../atoms/Button/Button"
import styles from "./buttonNav.module.css"
import { ReactComponent as LeftArrowIcon } from "../../../assets/arrow_left.svg"
import { ReactComponent as RightArrowIcon } from "../../../assets/arrow_right.svg"


export default function ButtonNav() {

    return(
        <div className={styles.container}>
            <Button>
                <LeftArrowIcon className={styles.arrowStyles}/>
            </Button>

            <Button>
                <RightArrowIcon className={styles.arrowStyles} />
            </Button>
        </div>
    )
}