import About from "./About"
import Motivator from "./Motivator"


const AboutSection = () => {
  return (
    <div id="about" className="w-full h-auto bg-white px-20 py-15 pb-20 flex flex-row gap-15 scroll-mt-24 max-md:flex-col max-md:px-4 max-md:py-10 max-md:pb-12 max-md:gap-8">
      <About />
      <Motivator />
    </div>
  )
}

export default AboutSection