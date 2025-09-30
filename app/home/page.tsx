import AboutSection from "./components/about-components/AboutSection";
import HeroSection from "./components/hero-components/HeroSection"
import dynamic from "next/dynamic";
import ReviewSection from "./components/review-components/ReviewSection";
import Connect from "./components/connect-components/Connect";
import PortfolioArea from "./components/portfolio-component/PortfolioArea";

const page = () => {
  return (
    <>
      <HeroSection />
      <PortfolioArea />
      <AboutSection />



      <div
        style={{
          backgroundImage: `linear-gradient(rgba(254, 250, 224, 0.6), rgba(254, 250, 224, 0.6)), url('/combine-bg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <ReviewSection />
        <Connect />
      </div>

    </>
  )
}

export default page; 