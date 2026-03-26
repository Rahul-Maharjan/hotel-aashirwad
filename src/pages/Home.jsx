import HomeHero from "../components/Home/HomeHero";
import AboutUs from "../components/Home/AboutUs";
import Differences from "../components/Home/Differences";
import ActivitiesSection from "../components/Home/Destination";
import Accommodation from "../components/Home/Accomodation";
import OurServices from "../components/Home/OurServices";
import Testimonials from "../components/Home/Testimonials";
import Blog from "../components/Home/Blog";
import SEO from "../components/SEO/SEO";

const Home = () => {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hotel Aashirwad",
    "description": "Luxurious stay in Pokhara with breathtaking Himalayan views.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pokhara",
      "addressRegion": "Kaski",
      "addressCountry": "NP"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4"
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      <SEO 
        title="Luxury Stay in Pokhara"
        description="Hotel Aashirwad offers the ultimate luxury experience in Pokhara with breathtaking Himalayan views, elegant rooms, and world-class hospitality."
        url="/"
        schema={hotelSchema}
      />
      <HomeHero />
      <AboutUs />
      <Differences />
      <ActivitiesSection />
      <Accommodation />
      <OurServices />
      <Blog />
      <Testimonials />
    </div>
  );
};

export default Home;
