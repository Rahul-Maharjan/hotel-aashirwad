import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const LoadingScreen = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1e2a54] text-white"
        >
          {/* Logo or Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12 flex flex-col items-center px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-widest text-white italic text-center leading-tight">
              <span className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Hotel</span>{" "}
              <span className="font-normal">Aashirwad</span>
            </h1>
            <div className="h-0.5 bg-[#F59E0B] w-full max-w-[200px] sm:max-w-[300px] md:max-w-md mt-2 md:mt-3 origin-left scale-x-0 animate-expand" />
          </motion.div>

          {/* Animated Spinner with Logo */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-full h-full border-2 sm:border-4 border-t-transparent border-b-transparent border-l-[#F59E0B] border-r-[#F59E0B] rounded-full"
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 sm:border-4 border-t-[#F59E0B] border-b-[#F59E0B] border-l-transparent border-r-transparent rounded-full opacity-60"
            />
            
            {/* Center Logo */}
            <motion.img
              src={logo}
              alt="Hotel Aashirwad"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain z-10 brightness-0 invert p-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-sm uppercase tracking-widest text-gray-300 font-light"
          >
            Experience Tranquility
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
