import { useState, useEffect } from "react";

function useIndexCounter({index, direction}) {

    const [ index, setIndex ] = useState({activeIndex: 0, nextIndex: null})

    useEffect(() => {
        if (direction === "left") {
            const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 3;
            setIndex((nextIndex) => {
                const newState = {...index, activeIndex: []}
                return nextIndex
            })
        } else if (direction === "right") {
            const nextIndex = activeIndex + 1 <= 4 ? activeIndex + 1 : 0;
            setIndex((nextIndex) => {
                return nextIndex
            })
        }
    })



}