import { ReactElement } from "react"
import { heroAchievement ,TypeWriterTexts } from "@/app/utils"


export const SEOAchievement = (): ReactElement => {
    return <div className='absolute bottom-3 h-0 w-0 overflow-hidden opacity-0'>
        {heroAchievement.map((achivement, index) => <div key={`SEO-ACHIVEMENT-DIV-${index}`}>{achivement.title} : {achivement.description}</div>)}
    </div>
}
export const SEOTypeWriter = () : ReactElement => {
    return <div className='absolute top-0 w-0 h-0 overflow-hidden opacity-0'>
        {TypeWriterTexts.map((text , index) => (
           <div key={`SEO-OPTIMIZATION-TYPEWRITER-${index}`}>{text}</div> 
        ))}
    </div>
}