import Navbar from "../components/Navbar";
import HomeHero from "../components/Home/HomeHero";
import AboutUs from "../components/Home/AboutUs";
import Accommodation from "../components/Home/Accomodation";
import OurServices from "../components/Home/OurServices";
import Testimonials from "../components/Home/Testimonials";
import ContactInfo from "../components/Home/Contactinfo";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <HomeHero />
      <AboutUs/>
      <Accommodation />
      <OurServices />
      <Testimonials/>
      <ContactInfo/>
      <Footer />
     
    </div>
  );
};

export default Home;
