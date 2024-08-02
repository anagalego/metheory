import React, { useEffect, useState } from "react"
import proverbios from "../API/data/proverbios.json"

export default function Theories() {
    const [currentMonth, setCurrentMonth] = useState("janeiro")
    const time = new Date()
    
    const proverbs = proverbios[time.getMonth()]
    const proverb = proverbs[Math.floor(Math.random() * 29)]

    return (
        <div className="cards">
            {proverb}
            <br/>
            {time.toString()}
        </div>     
    )
}