import AboutSection from "./components/about-components/AboutSection";
// import HomeHashScroll from "./components/HomeHashScroll";
import HeroSection from "./components/hero-components/HeroSection"
import ReviewSection from "./components/review-components/ReviewSection";
import Connect from "./components/connect-components/Connect";
import PortfolioArea from "./components/portfolio-component/PortfolioArea";
import Footer from "../utils-components/Footer";
import MeetOurTeam from "./components/meet-our-team/MeetOurTeam";

const page = () => {
  return (
    <>
      {/* <HomeHashScroll /> */}
      <HeroSection />
      <PortfolioArea />
      <AboutSection />
      <MeetOurTeam/>
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
      <Footer/>

    </>
  )
}

export default page; 