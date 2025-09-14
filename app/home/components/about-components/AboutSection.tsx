import About from "./About"
import Motivator from "./Motivator"


const AboutSection = () => {
  return (
    <div className="w-full h-auto bg-white px-20 py-15 flex flex-row gap-15">
        <Motivator/>
        <About/>
    </div>
  )
}

export default AboutSection