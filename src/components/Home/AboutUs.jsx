import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#efefef] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 sm:px-8 lg:gap-16">
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
              Beauty In Every Detail
            </h3>
            <p className="max-w-md text-base leading-8 text-[#333333] sm:text-lg">
              Every room and suite is crafted for comfort, elegance, and calm.
              From tasteful interiors to premium amenities, each detail is
              designed to make your stay relaxing and unforgettable.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-[#9b7b45] transition-colors duration-300 hover:text-[#7f612f] sm:text-base"
            >
              Discover Our Rooms & Suites
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
            <div className="overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.14)]">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1350&q=80"
                alt="Luxury hotel room"
                className="h-[260px] w-full object-cover sm:h-[340px] md:h-[440px]"
              />
            </div>
            <div className="mt-3 hidden justify-end gap-7 text-3xl text-[#9b7b45] md:flex">
              <span aria-hidden="true">←</span>
              <span aria-hidden="true">→</span>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
