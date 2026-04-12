"use client"
import { ReactElement} from "react"
import { visions } from "@/app/utils"
import LazyImage from "@/app/utils-components/LazyImage";
import { motion } from "framer-motion";
import Writer from "@/app/utils-components/Writer";

const VisionComponent = (): ReactElement => {
    return (
        <div className="text-2xl text-white absolute top-0 left-0 w-full h-full  z-4 flex flex-col items-center justify-center gap-4 max-md:text-sm max-md:px-3">
            <motion.div 
                className="flex flex-col justify-between w-[90%] gap-8 p-6 py-3 bg-black/80 rounded-2xl max-md:w-full max-md:gap-4 max-md:p-4"
                initial= {{opacity:0 , scale:0}}
                animate= {{opacity:[0,0.5,1] , scale:[0,0.4,1]}}
            >
                <div className="h-36 w-full mx-auto text-xl font-bold text-justify flex items-center justify-center max-md:h-28 max-md:text-sm max-md:leading-6">
                    <Writer words={visions} typeSpeed={40} delaySpeed={10000} deleteSpeed={40} spanClass="text-xl max-md:text-xs max-md:leading-6"/>
                </div>

                <div className="w-full flex flex-row justify-end items-center gap-4 max-md:gap-3">
                    <LazyImage
                        alt="COMPANY DIRECTOR PHOTO"
                        src="/assets/teams/Atul_Bhargava_CEO.png"
                        classes="h-10 w-10 rounded-full overflow-hidden max-md:h-8 max-md:w-8"
                    />
                    <span className="text-base text-white font-bold flex flex-col justify-center gap-0.5 h-12 max-md:h-auto max-md:text-[11px]">
                        Mr. Atul Bhargav
                        <span className="text-xs -mt-1 italic text-gray-200 max-md:text-[10px]">Message from the Owner</span>
                    </span>
                </div>
            </motion.div>
        </div>
    )
}

export default VisionComponent; 