import AboutSection from "./components/about-components/AboutSection";
import HeroSection from "./components/hero-components/HeroSection"
import dynamic from "next/dynamic";
import ReviewSection from "./components/review-components/ReviewSection";
import Connect from "./components/connect-components/Connect";
import PortfolioArea from "./components/portfolio-component/PortfolioArea";

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