import { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  const [form, setForm] = useState({
    checkin: "",
    checkout: "",
    adults: "1",
    children: "0",
  });

  const [slides] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1950&q=80",
      title: "Welcome to Hotel Aashirwad",
      subtitle: "Luxury & Comfort in the Heart of Pokhara",
    },
    {
      image:
        "https://assets-excellenttrek.b-cdn.net/wp-content/uploads/2017/03/paragliding-in-pokhara.jpg",
      title: "Elegant Rooms & Serene Views",
      subtitle: "Experience premium hospitality like never before",
    },
    {
      image:
        "https://dorjes.com/wp-content/themes/yootheme/cache/8f/Lakes-in-Pokhara-8fccb9bc.jpeg",
      title: "Unforgettable Stay",
      subtitle: "Book now and enjoy exclusive deals",
    },
  ]);

  const today = new Date().toISOString().split("T")[0];
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkinDate = new Date(form.checkin);
    const checkoutDate = new Date(form.checkout);
    const now = new Date();

    if (!form.checkin || !form.checkout) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    if (checkinDate < now.setHours(0, 0, 0, 0)) {
      alert("Check-in date must be today or in the future.");
      return;
    }

    if (checkoutDate <= checkinDate) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    alert(
      `Room is available!\nFrom: ${form.checkin}\nTo: ${form.checkout}\nAdults: ${form.adults}\nChildren: ${form.children}`,
    );
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
        speed={800}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
              <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-white text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-4xl md:text-6xl mb-4 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl mb-8 drop-shadow-md animate-fadeIn">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Booking Form */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-10 w-full flex justify-center px-4 z-50"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-5/6 max-w-6xl bg-white bg-opacity-95 backdrop-blur-lg text-gray-800 rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-5 gap-4 px-6 py-4"
        >
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">CHECK-IN</label>
            <input
              type="date"
              name="checkin"
              value={form.checkin}
              onChange={handleChange}
              min={today}
              required
              className="py-2 px-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">CHECK-OUT</label>
            <input
              type="date"
              name="checkout"
              value={form.checkout}
              onChange={handleChange}
              min={form.checkin || today}
              required
              className="py-2 px-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">ADULTS</label>
            <select
              name="adults"
              value={form.adults}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e2a54]"
            >
              {[...Array(5)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">CHILDREN</label>
            <select
              name="children"
              value={form.children}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e2a54]"
            >
              {[...Array(5)].map((_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-[#1e2a54] text-white font-semibold py-3 rounded hover:bg-[#F59E0B] transition-all shadow-md"
            >
              CHECK FOR AVAILABILITY
            </button>
          </div>
        </form>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
