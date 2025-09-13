"use client"
import { TypeWriterTexts } from "@/app/utils";
import { Typewriter } from "react-simple-typewriter"

const TypeWriter = () => {
    return (
        <span className='text-2xl text-gray-200 font-[500]'>
            <Typewriter
                words={TypeWriterTexts}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={80}
                delaySpeed={1200}
            />
        </span>
    )
}

export default TypeWriter ; 