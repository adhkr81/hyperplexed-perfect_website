import Button from "../../atoms/button/Button"
import styles from "./buttonNav.module.css"
import { ReactComponent as LeftArrowIcon } from "../../../assets/arrow_left.svg"
import { ReactComponent as RightArrowIcon } from "../../../assets/arrow_right.svg"
import { useState, useEffect } from "react"


export default function ButtonNav({i, refArray}) {

    const [ activeIndex, setActiveIndex ] = useState(0)

    useEffect(() => {
        console.log(activeIndex);
      }, [activeIndex]);
//WHY STATE IS NOT UPDATING???????????

    function handleLeft() {
        // Checks if index needs to be reset to loop 
        const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 3;

        const currentArticle = refArray.current[activeIndex]
        const nextArticle = refArray.current[nextIndex]

        // Active group becomes inactive (go left)
        refArray.current[activeIndex].setAttribute("data-status", "inactive")

        // Next article becomes active
        refArray.current[nextIndex].setAttribute("data-status", "active")

        console.log(nextIndex)
        setActiveIndex((nextIndex) => {return nextIndex})
        
    }

    function handleRight() {

        // Checks if index needs to be reset to loop 
        const nextIndex = activeIndex + 1 <= 4 ? activeIndex + 1 : 0;

        const currentArticle = refArray.current[activeIndex]
        const nextArticle = refArray.current[nextIndex]

        // Active group becomes inactive (go left)
        refArray.current[activeIndex].setAttribute("data-status", "inactive")

        // Next article becomes active
        refArray.current[nextIndex].setAttribute("data-status", "active")

        console.log(nextIndex)
        setActiveIndex((nextIndex) => {return nextIndex})
        
    }

    useEffect(() => {
        console.log(refArray.current);
      }, [refArray]);

    return(
        <div className={styles.container}>
            <Button handle={handleLeft} i={i}>
                <LeftArrowIcon className={styles.arrowStyles}/>
            </Button>

            <Button handle={handleRight} i={i}>
                <RightArrowIcon className={styles.arrowStyles}/>
            </Button>
        </div>
    )
}