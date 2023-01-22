import styles from "./main.module.css"
import data from "../../../ultilities/data.json"

import ButtonNav from "../../molecules/buttonNav/ButtonNav"
import Title from "../../molecules/title/Title"
import Paragraph from "../../atoms/paragraph/Paragraph"

import { useState, useRef, useEffect } from "react"


export default function Main () {

    const refArray = useRef([]) 

    useEffect(() => {
        if(refArray.current.length > data.length) {
          refArray.current = []
        }   
      },[])

    useEffect(() => {
        console.log(refArray.current);
      }, [refArray]);

    return (
        <main>
            {data.map((current, i) => {
                return (
                <article ref={(element) => refArray.current.push(element)} data-status={current.status} data-index={i}>
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
                        <ButtonNav refArray={refArray} i={i}/>  
                    </div>
                </article> 
                )
            })}

        </main>
    )
}