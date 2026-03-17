import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion as Motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Dipson Pokhrel",
    platform: "facebook",
    feedback:
      "Absolutely loved my stay at Hotel Aashirwad! The staff were incredibly kind and the view of Pokhara was breathtaking.",
  },
  {
    name: "Alish Bajracharya",
    platform: "google",
    feedback:
      "The rooms were clean and elegant, food was delicious, and their 24/7 service exceeded expectations!",
  },
  {
    name: "Luja Maharjan",
    platform: "instagram",
    feedback:
      "Perfect blend of comfort and professionalism. The concierge made my business trip totally hassle-free.",
  },
  {
    name: "Angel Gurung",
    platform: "facebook",
    feedback:
      "The rooftop restaurant and the views were just insane. Loved the Nepali thali and their special drinks!",
  },
  {
    name: "Sarin Shakya",
    platform: "google",
    feedback:
      "Clean rooms, peaceful location, and warm hospitality — my photography tour went smooth thanks to the team!",
  },
  {
    name: "Anne Thapa",
    platform: "instagram",
    feedback:
      "Super fast Wi-Fi, great coffee, and a cozy room — made my remote work so productive!",
  },
];

const platformMeta = {
  facebook: {
    label: "Facebook Review",
    icon: FaFacebookF,
    iconColor: "text-[#1877F2]",
  },
  google: {
    label: "Google Review",
    icon: FaGoogle,
    iconColor: "text-[#DB4437]",
  },
  instagram: {
    label: "Instagram Mention",
    icon: FaInstagram,
    iconColor: "text-[#C13584]",
  },
};

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#efefef] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#f7f5f1] to-transparent" />

      <Motion.div
        className="relative mb-12 px-4 text-center sm:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-[#6a6a6a]">
          Guest Experience
        </p>
        <h2 className="font-serif text-3xl uppercase tracking-[0.14em] text-[#111111] sm:text-4xl">
          Voice of Satisfaction
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
          Hear what our happy guests say about their unforgettable experiences
          with us.
        </p>
        <div className="mx-auto mt-4 h-[1px] w-20 bg-[#9b7b45]" />
      </Motion.div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <Motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.03, duration: 0.55 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -4 }}
                className="group h-full border border-[#ddd6c8] bg-[#f7f5f1] p-7 shadow-[0_12px_26px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <FaQuoteLeft className="mb-4 text-2xl text-[#9b7b45]/50" />
                <p className="min-h-[132px] text-sm italic leading-7 text-[#4a4a4a] sm:text-base">
                  “{item.feedback}”
                </p>

                <div className="mt-6 flex items-center gap-4 border-t border-[#e3ddcf] pt-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7c7a6] bg-white">
                    {(() => {
                      const meta =
                        platformMeta[item.platform] || platformMeta.google;
                      const PlatformIcon = meta.icon;

                      return (
                        <PlatformIcon className={`text-lg ${meta.iconColor}`} />
                      );
                    })()}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg uppercase tracking-[0.04em] text-[#0f1f47]">
                      {item.name}
                    </h4>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#6a6a6a]">
                      {
                        (platformMeta[item.platform] || platformMeta.google)
                          .label
                      }
                    </p>
                  </div>
                </div>
              </Motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-prev absolute -left-2 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer rounded-full border border-[#d7c7a6] bg-white p-2 shadow-md transition hover:scale-110 lg:block">
          <FaChevronLeft className="text-[#0f1f47]" />
        </div>
        <div className="testimonial-next absolute -right-2 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer rounded-full border border-[#d7c7a6] bg-white p-2 shadow-md transition hover:scale-110 lg:block">
          <FaChevronRight className="text-[#0f1f47]" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
