import Button from "../../atoms/button/Button"
import styles from "./buttonNav.module.css"
import { ReactComponent as LeftArrowIcon } from "../../../assets/arrow_left.svg"
import { ReactComponent as RightArrowIcon } from "../../../assets/arrow_right.svg"
import { useState, useEffect } from "react"


export default function ButtonNav({i, refArray}) {

    const [ activeIndex, setActiveIndex ] = useState(0)
    const [ nextIndex, setNextIndex ] = useState(0)

    function handleLeft() {
        // Checks if index needs to be reset to loop 
        const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 3;

        // Active group becomes inactive
        const currentArticle = refArray.current[activeIndex]
        refArray.current[activeIndex].setAttribute("data-status", "inactive")

        // Next article becomes active
        const nextArticle = refArray.current[nextIndex]
        refArray.current[nextIndex].setAttribute("data-status", "active")

        // console.log(nextIndex)
        // setActiveIndex(() => {return nextIndex})
    }

    function handleRight() {
        // Checks if index needs to be reset to loop 
        const nextIndex = activeIndex + 1 <= 4 ? activeIndex + 1 : 0;
        console.log(nextIndex)

        // Active group becomes inactive 
        const currentArticle = refArray.current[activeIndex]
        refArray.current[activeIndex].setAttribute("data-status", "inactive")

        // Next article becomes active
        const nextArticle = refArray.current[nextIndex]
        refArray.current[nextIndex].setAttribute("data-status", "active")

        // console.log(nextIndex)
        // setActiveIndex(() => {
        //     console.log(nextIndex)
        //     return nextIndex})


        // const length = refArray.current.length
        // setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1)

        // console.log(activeIndex)
    }

    useEffect(() => {
        console.log(refArray.current);
      }, [refArray]);     

    useEffect(() => {
        console.log(activeIndex);
      }, [activeIndex]);

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