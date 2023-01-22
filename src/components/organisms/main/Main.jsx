import styles from "./main.module.css"
import data from "../../../ultilities/data.json"

import ButtonNav from "../../molecules/buttonNav/ButtonNav"
import Title from "../../molecules/title/Title"
import Paragraph from "../../atoms/paragraph/Paragraph"

import { useState, useRef, useEffect } from "react"


export default function Main () {

    const [ activeArticle, setActiveArticle ] = useState(null) 
    const refArray = useRef([]) 

    useEffect(() => {
        if(refArray.current.length > data.length) {
          refArray.current = []
        }   
      },[])

    useEffect(() => {
        console.log(refArray.current);
        console.log(refArray.current[2].getAttribute("status"));
      }, [refArray]);

    return (
        <main>
            {data.map((current, i) => {
                return (
                <article key={i} ref={(element) => refArray.current.push(element)} status={current.status}>
                    <div style={{ backgroundImage: `${current.image}`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat" }} 
                                className={styles.articleSection}>
                    </div>
                    <div className={styles.articleSection}>
                        <Paragraph data={current.description}/>
                    </div>
                    <div className={styles.articleSection}>
                        <Title data={current.title}/>
                    </div>
                    <div className={styles.articleSection}>
                        <ButtonNav index={i} setActiveArticle={setActiveArticle} refArray={refArray}/>  
                    </div>
                </article> 
                )
            })}

        </main>
    )
}