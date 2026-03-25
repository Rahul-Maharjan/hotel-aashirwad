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
import { useServiceSection } from "../../hooks/useServiceSection";

const iconMap = {
  bell: Bell,
  tshirt: Shirt,
  car: Car,
  utensils: UtensilsCrossed,
  martini: Martini,
  shower: ShowerHead,
  leaf: Leaf,
  wifi: Wifi,
  info: Info,
};

const OurServices = () => {
  const { data: sectionData, loading } = useServiceSection();

  if (loading) return null;

  const services = sectionData?.items || [];

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
            {sectionData?.section_title || "Crafted For Comfort"}
          </p>
          <h2 className="mb-4 font-serif text-3xl uppercase tracking-[0.14em] text-[#111111] sm:text-4xl">
            {sectionData?.headline || "Our Services"}
          </h2>
          <p className="text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
            {sectionData?.description || "Thoughtful amenities and attentive hospitality designed to make each stay seamless, relaxing, and memorable."}
          </p>
        </Motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon?.toLowerCase()] || Info;

            return (
              <Motion.div
                key={service.id || index}
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
                  {service.service_name}
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
