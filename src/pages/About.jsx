import React, { useEffect } from 'react';
import CommonHeader from "../components/CommonHeader";
import Img from "../assets/Homehero2.webp";
import HotelIntro from "../components/About Us/HotelIntro";
import WhyChooseUs from "../components/About Us/WhyChooseUs";
import HotelServices from "../components/About Us/HotelServices";
import MeetOurTeam from "../components/About Us/MeetOurTeam";
import Testimonials from "../components/Home/Testimonials";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-white">
      <CommonHeader
          title="ABOUT US"
          description="Discover the passion, heritage, and people behind Pokhara's premier luxury destination. Welcome to Hotel Aashirwad."
          image={Img}
          imageAlt="About Hotel Aashirwad"
      />
      <HotelIntro />
      <WhyChooseUs />
      <HotelServices />
      <MeetOurTeam />
      <Testimonials />
    </div>
  );
};

export default About;
