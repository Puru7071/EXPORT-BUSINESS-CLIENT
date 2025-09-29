import About from "./About"
import Motivator from "./Motivator"


const AboutSection = () => {
  return (
    <div className="w-full h-auto bg-white px-20 py-15 pb-20 flex flex-row gap-15">
      <About/>
      <Motivator/>
    </div>
  )
}

export default AboutSection