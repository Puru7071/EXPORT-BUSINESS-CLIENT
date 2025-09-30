"use client"
import { Typewriter } from "react-simple-typewriter"

const Writer = ({words , typeSpeed = 70 , deleteSpeed = 80 , delaySpeed = 1200 , spanClass = ""}: {words : string[] , typeSpeed ?: number , deleteSpeed ?: number , delaySpeed ?: number , spanClass ?: string}) => {
    return (
        <span className={`text-gray-200 font-[500] text-2xl ${spanClass}`}>
            <Typewriter
                words={words}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={typeSpeed}
                deleteSpeed={deleteSpeed}
                delaySpeed={delaySpeed}
            />
        </span>
    )
}

export default Writer ; 