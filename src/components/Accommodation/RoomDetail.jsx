// src/pages/RoomDetail.jsx
import React from "react";
import { motion } from "framer-motion";

const RoomDetail = ({ title, description, image, features }) => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6">
      {/* Hero with Image and Title */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full md:w-1/2 rounded-3xl shadow-2xl object-cover h-[400px]"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        />
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-[#1e2a54]">{title}</h1>
          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
            {description}
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-md rounded-xl px-5 py-3 border hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-blue-700 font-semibold">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RoomDetail;
