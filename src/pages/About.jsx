import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/About Us/AboutHero";
import WhoWeAre from "../components/About Us/WhoWeAre";
import WhyChooseUs from "../components/About Us/WhyChooseUs";
import MissionVision from "../components/About Us/MissionVision";
import MeetOurTeam from "../components/About Us/MeetOurTeam";
import Guest from "../components/About Us/Guest";
import Sustainability from "../components/About Us/Sustainability";

const About = () => {
  return (
    <div className="relative">
      <Navbar />
      <AboutHero />
      <WhoWeAre />

      <MissionVision />
      <WhyChooseUs />
      <MeetOurTeam />
      <Guest />
      <Sustainability />
    
      <Footer />
    </div>
  );
};

export default About;
