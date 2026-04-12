import LazyImage from "../../../utils-components/LazyImage"
import VisionComponent from "./VisionComponent"

const Motivator = () => {
  return (
    <div className="w-[50%] max-md:w-full">
        <LazyImage 
            src="/assets/collage.webp" 
            classes="h-120 w-full transition-all duration-500 cursor-pointer max-md:h-80" 
            alt="LEGACY-BUSINESS-IMAGE" 
        >
          <VisionComponent/>
        </LazyImage>
    </div>
  )
}

export default Motivator