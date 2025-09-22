import AboutSection from "./components/about-components/AboutSection";
import HeroSection from "./components/hero-components/HeroSection"
import dynamic from "next/dynamic";
import ReviewSection from "./components/review-components/ReviewSection";

const PortfolioArea = dynamic(() => import("./components/portfolio-component/PortfolioArea"), {
  loading: () => <div>Loading...</div> 
})

const page = () => {
  return (
    <>
      <HeroSection/>
      <PortfolioArea/>
      <AboutSection/>
      <ReviewSection/>
    </>
  )
}

export default page ; 