import LazyImage from "../../../utils-components/LazyImage"
import VisionComponent from "./VisionComponent"

const Motivator = () => {
  return (
    <>
        <LazyImage 
            src="/assets/collage.webp" 
            classes="h-120 w-[50%] transition-all duration-500 cursor-pointer" 
            alt="LEGACY-BUSINESS-IMAGE" 
        >
          <VisionComponent/>
        </LazyImage>
    </>
  )
}

export default Motivator