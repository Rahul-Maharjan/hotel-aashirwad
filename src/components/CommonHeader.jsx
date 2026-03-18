import React from "react";
import headerImg from "../assets/header-img.jpg";

const CommonHeader = ({
  title = "Welcome to Our Hotel",
  description = "Experience comfort, elegance, and exceptional hospitality. Whether you're here for relaxation or adventure, we ensure your stay is truly unforgettable.",
  image = headerImg,
  imageAlt = "Header",
}) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-[320px] md:h-[380px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 py-4 mt-4">
        <h1 className="text-3xl md:text-5xl text-white font-bold mb-4 mt-4 ">
          {title}
        </h1>

        <p className="max-w-xl text-sm md:text-base  text-gray-200 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CommonHeader;
