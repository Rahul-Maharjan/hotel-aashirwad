import { motion as Motion } from "framer-motion";
import {
  Bell,
  Car,
  Info,
  Leaf,
  Martini,
  Shirt,
  ShowerHead,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";

const services = [
  {
    icon: Bell,
    title: "24/7 Service",
    description:
      "Round-the-clock front desk and room service to serve your every need.",
  },
  {
    icon: Shirt,
    title: "Laundry",
    description: "Quick and professional laundry services during your stay.",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Spacious and secure on-site parking for all guests.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description: "Enjoy a variety of local and international dishes.",
  },
  {
    icon: Martini,
    title: "Bars",
    description: "Relax at our elegant bars with a wide range of drinks.",
  },
  {
    icon: ShowerHead,
    title: "Hot & Cold Water",
    description: "24-hour hot and cold water facility for your comfort.",
  },
  {
    icon: Leaf,
    title: "Greenery",
    description:
      "A peaceful environment surrounded by beautiful natural greenery.",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description:
      "Stay connected with high-speed internet throughout the property.",
  },
  {
    icon: Info,
    title: "Concierge",
    description:
      "Personalized concierge service for all your travel and stay needs.",
  },
];

const OurServices = () => {
  return (
    <section className="relative overflow-hidden bg-[#efefef] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f7f5f1] to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-[#6a6a6a]">
            Crafted For Comfort
          </p>
          <h2 className="mb-4 font-serif text-3xl uppercase tracking-[0.14em] text-[#111111] sm:text-4xl">
            Our Services
          </h2>
          <p className="text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
            Thoughtful amenities and attentive hospitality designed to make each
            stay seamless, relaxing, and memorable.
          </p>
        </Motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -4 }}
                className="group border border-[#ddd6c8] bg-[#f7f5f1] p-6 shadow-[0_12px_26px_rgba(0,0,0,0.06)] transition-all duration-300 sm:p-7"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d7c7a6] bg-white text-[#0f1f47] transition-colors duration-300 group-hover:text-[#9b7b45]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-2xl uppercase tracking-[0.05em] text-[#0f1f47]">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-[#4a4a4a] sm:text-base">
                  {service.description}
                </p>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
