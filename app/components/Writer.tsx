"use client"
import { Typewriter } from "react-simple-typewriter"

const Writer = ({words , typeSpeed = 70 , deleteSpeed = 80 , delaySpeed = 1200}: {words : string[] , typeSpeed ?: number , deleteSpeed ?: number , delaySpeed ?: number}) => {
    return (
        <span className='text-2xl text-gray-200 font-[500]'>
            <Typewriter
                words={words}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={typeSpeed}
                deleteSpeed={deleteSpeed}
                delaySpeed={delaySpeed}
                loop={1}
            />
        </span>
    )
}

export default Writer ; 