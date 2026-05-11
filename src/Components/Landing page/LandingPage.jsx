import Navigation from "./Navigation";
import Hero from "./Hero";
import Feature from "./Feature";
import Statistic from "./Statistic";
import HowItWorks from "./HowItWorks";
import DepartmentsSection from "./DepartmentsSection";
import LoginCards from "./LoginCards";
import Footer from "./Footer";
import NewsSection from "./NewsSection";

function LandingPage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Feature />
      <Statistic />
      <DepartmentsSection />
       <HowItWorks />
      <LoginCards />
      <NewsSection/>
      <Footer />
    </>
  );
}

export default LandingPage;