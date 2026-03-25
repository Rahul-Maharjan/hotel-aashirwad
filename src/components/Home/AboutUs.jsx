import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import about1 from "../../assets/hotel/hotel_exterior_07.jpg";
import about2 from "../../assets/hotel/hotel_exterior_05.jpg";
import about3 from "../../assets/hotel/deluxe_1.jpg";
import useAboutSection from "../../hooks/useAboutSection";

const aboutImages = [
  {
    src: about1,
    alt: "Luxury hotel bedroom interior",
  },
  {
    src: about2,
    alt: "Elegant suite room with warm lights",
  },
  {
    src: about3,
    alt: "Premium room with modern decor",
  },
];

const AboutUs = () => {
  const { data, loading, error } = useAboutSection();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const showPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? aboutImages.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % aboutImages.length);
  };

  if (loading) return null; 
  if (error) return null; 

  return (
    <section className="w-full bg-[#efefef] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 sm:px-8 lg:gap-16">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-[#6a6a6a]">
            The Finest Hospitality in Pokhara
          </p>
          <h2 className="mb-4 font-serif text-3xl uppercase tracking-[0.14em] text-[#111111] sm:text-4xl">
            Hotel Aashirwad
          </h2>
          <p className="text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
            Set near Pokhara&apos;s natural beauty, Hotel Aashirwad blends warm
            Nepali hospitality with refined comfort. Enjoy thoughtfully designed
            rooms, scenic views, attentive service, and a peaceful atmosphere
            created for memorable stays.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:gap-14">
          <Motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
            className="order-2 px-1 md:order-1 md:px-0"
          >
            <h3 className="mb-4 max-w-sm font-serif text-3xl uppercase leading-tight text-[#0f1f47] sm:text-4xl">
              {data?.headline || "Beauty In Every Detail"}
            </h3>
            <p className="max-w-md text-base leading-8 text-[#333333] sm:text-lg">
              {data?.description || "Every room and suite is crafted for comfort, elegance, and calm. From tasteful interiors to premium amenities, each detail is designed to make your stay relaxing and unforgettable."}
            </p>

            <Link
              to={`/${data?.cta_route || "about"}`}
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-[#9b7b45] transition-colors duration-300 hover:text-[#7f612f] sm:text-base"
            >
              {data?.cta_name || "Discover Our Hotel"}
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </Link>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.14)]">
              <AnimatePresence mode="wait" initial={false}>
                <Motion.img
                  key={aboutImages[activeImageIndex].src}
                  src={aboutImages[activeImageIndex].src}
                  alt={aboutImages[activeImageIndex].alt}
                  className="h-[260px] w-full object-cover sm:h-[340px] md:h-[440px]"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
            </div>

            <div className="mt-3 flex justify-center gap-6 text-3xl text-[#9b7b45] md:justify-end md:gap-7">
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Show previous image"
                className="transition-colors duration-300 hover:text-[#7f612f]"
              >
                ←
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Show next image"
                className="transition-colors duration-300 hover:text-[#7f612f]"
              >
                →
              </button>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
