import React from "react";
import headerImg from "../assets/header-img.jpg";

const CommonHeader = ({
  title = "Welcome to Our Hotel",
  description = "Experience comfort, elegance, and exceptional hospitality. Whether you're here for relaxation or adventure, we ensure your stay is truly unforgettable.",
  image = headerImg,
  imageAlt = "Header",
}) => {
  return (
    <div className="relative h-[45vh] min-h-[320px] md:min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Minimal Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-20 px-6">
        <div className="w-full max-w-3xl space-y-4">
          {/* Minimalist accent line */}
          <div className="w-12 h-px bg-white/80 mx-auto" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight text-center">
            {title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/85 font-light tracking-wide text-center max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
