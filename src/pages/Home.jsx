import Navbar from "../components/Navbar";
import HomeHero from "../components/Home/HomeHero";
import AboutUs from "../components/Home/AboutUs";
import Differences from "../components/Home/Differences";
import ActivitiesSection from "../components/Home/Destination";
import Accommodation from "../components/Home/Accomodation";
import OurServices from "../components/Home/OurServices";
import Testimonials from "../components/Home/Testimonials";
import Blog from "../components/Home/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <HomeHero />
      <AboutUs />
      <Differences />
      <ActivitiesSection />
      <Accommodation />
      <OurServices />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
