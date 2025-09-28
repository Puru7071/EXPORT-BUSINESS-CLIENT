import AboutSection from "./components/about-components/AboutSection";
import HeroSection from "./components/hero-components/HeroSection"
import dynamic from "next/dynamic";
import ReviewSection from "./components/review-components/ReviewSection";
import Connect from "./components/connect-components/Connect";

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
      <Connect/>
    </>
  )
}

export default page ; 