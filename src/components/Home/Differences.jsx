import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDifferences } from "../../hooks/useDifferences";
const Differences = () => {
  const { data, loading, error } = useDifferences();
  const [swiperInstance, setSwiperInstance] = useState(null);

  if (loading || error) return null;

  const slides = data?.items || [];
  if (slides.length === 0) return null;

  return (
    <section className="bg-[#f7f5f1] py-16 sm:py-20">
      <div className="w-full px-0">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-4 text-center font-serif text-2xl uppercase tracking-[0.22em] text-[#1f1f1f] sm:mb-12 sm:px-8 sm:text-4xl"
        >
          {data?.headline || "Our Differences"}
        </Motion.h2>

        <div className="relative">
          <button
            type="button"
            className="differences-prev absolute left-[4%] top-1/2 z-20 hidden -translate-y-1/2 text-4xl text-[#b09258] transition-colors duration-300 hover:text-[#8e713e] lg:block xl:left-[6%]"
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            type="button"
            className="differences-next absolute right-[4%] top-1/2 z-20 hidden -translate-y-1/2 text-4xl text-[#b09258] transition-colors duration-300 hover:text-[#8e713e] lg:block xl:right-[6%]"
            aria-label="Next slide"
          >
            →
          </button>

          <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-0">
            <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-[11%] bg-gradient-to-r from-[#efefef] to-transparent lg:block" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-[11%] bg-gradient-to-l from-[#efefef] to-transparent lg:block" />

            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={setSwiperInstance}
              centeredSlides
              loop={true}
              speed={1050}
              grabCursor
              navigation={{
                prevEl: ".differences-prev",
                nextEl: ".differences-next",
              }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1.12}
              spaceBetween={16}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 18,
                },
                1024: {
                  slidesPerView: 1.58,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 1.7,
                  spaceBetween: 28,
                },
              }}
              className="differences-swiper"
            >
              {[...slides, ...slides].map((slide, index) => (
                <SwiperSlide key={`${slide.id}-${index}`}>
                  <div className="differences-slide-card relative h-[320px] overflow-hidden sm:h-[420px] lg:h-[520px]">
                    <img
                      src={slide.image}
                      alt={slide.headline}
                      className="h-full w-full object-cover"
                    />
                    <div className="differences-slide-overlay absolute inset-0 bg-black" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                      <p className="font-serif text-2xl uppercase leading-snug sm:text-[1.8rem] lg:text-[2.4rem]">
                        {slide.headline}
                      </p>
                      <p className="mt-5 max-w-3xl text-sm font-semibold leading-relaxed tracking-[0.01em] text-white/90 sm:text-base lg:text-lg">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5 lg:hidden">
            <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous slide"
              className="text-3xl text-[#b09258] transition-colors duration-300 hover:text-[#8e713e]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next slide"
              className="text-3xl text-[#b09258] transition-colors duration-300 hover:text-[#8e713e]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differences;
