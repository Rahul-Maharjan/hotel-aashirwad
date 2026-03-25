import { motion } from "framer-motion";
import { useAboutHero } from "../../hooks/useAboutHero";

const AboutHero = () => {
  const { data, loading } = useAboutHero();

  if (loading) return null;

  return (
    <motion.section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${data?.featured_image})`,
      }}
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative z-20 text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md mb-4 uppercase tracking-wider">
          {data?.headline || "Discover the Heart of Hospitality"}
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          {data?.description || "Welcome to Hotel Aashirwad, where elegance, tradition, and world-class service meet in the beauty of Pokhara."}
        </p>
        <div className="w-24 h-1 bg-[#9b7b45] mx-auto mt-6 rounded" />
      </motion.div>
    </motion.section>
  );
};

export default AboutHero;
