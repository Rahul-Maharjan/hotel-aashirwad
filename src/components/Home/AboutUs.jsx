import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80"
            alt="Hotel Exterior"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#1e2a54]">
            About Hotel Aashirwad
          </h2>
          <p className="text-base md:text-lg mb-6 text-justify text-gray-700">
            Welcome to Hotel Aashirwad and Restaurant, nestled in the serene beauty of Pokhara. 
            Hotel Aashirwad is your ultimate destination for a luxurious and peaceful stay. 
            We blend traditional Nepali hospitality with modern amenities to offer a truly unforgettable experience.
            From breathtaking mountain views and elegant interiors to exceptional service — every detail is crafted with care to provide comfort, convenience, and charm.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-[#1e2a54] text-white font-medium rounded-full hover:bg-[#F59E0B] transition-all duration-300 shadow-md"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
