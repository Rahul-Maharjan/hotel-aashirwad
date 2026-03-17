import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion as Motion } from "framer-motion";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  Bath,
  BedDouble,
  Briefcase,
  CheckCircle2,
  Coffee,
  Lock,
  Package,
  ShieldCheck,
  Shirt,
  Thermometer,
  Tv,
  Wifi,
  Wind,
  Wine,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMemo, useState } from "react";

import suiteRoom from "../../assets/suite_room.png";

const amenityIcons = {
  "LED TV With Channel": <Tv className="h-6 w-4 text-lime-800" />,
  "Electric Kettle for Coffee/Tea": (
    <Coffee className="h-6 w-4 text-lime-800" />
  ),
  "Hair Dryer": <Wind className="h-6 w-4 text-lime-800" />,
  "High-Speed Wi-Fi": <Wifi className="h-6 w-4 text-lime-800" />,
  "Do Not Disturb System": <Lock className="h-6 w-4 text-lime-800" />,
  "Mini Bar": <Wine className="h-6 w-4 text-lime-800" />,
  "Iron & Iron Board": <Shirt className="h-6 w-4 text-lime-800" />,
  "Luxury Bathroom Amenities": <Bath className="h-6 w-4 text-lime-800" />,
  "Safe Shield Bathroom Fixture": (
    <ShieldCheck className="h-6 w-4 text-lime-800" />
  ),
  "Two Twin Beds": <BedDouble className="h-6 w-4 text-lime-800" />,
  "Work Desk": <Briefcase className="h-6 w-4 text-lime-800" />,
  "Air Conditioning": <Thermometer className="h-6 w-4 text-lime-800" />,
  "Smart TV": <Tv className="h-6 w-4 text-lime-800" />,
  "Mini Fridge": <Package className="h-6 w-4 text-lime-800" />,
};

const rooms = [
  {
    id: "r1",
    name: "Deluxe Room",
    type: "Single Bed",
    price: "2500",
    description: "Elegant room with premium interiors and stunning views.",
    amenities: [
      "LED TV With Channel",
      "Electric Kettle for Coffee/Tea",
      "Hair Dryer",
      "High-Speed Wi-Fi",
      "Do Not Disturb System",
      "Mini Bar",
      "Iron & Iron Board",
      "Luxury Bathroom Amenities",
    ],
    images: [
      suiteRoom,
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "r2",
    name: "Twin Room",
    type: "Twin Bed",
    price: "2200",
    description: "Spacious twin room ideal for friends or family stays.",
    amenities: [
      "Two Twin Beds",
      "Work Desk",
      "Air Conditioning",
      "Smart TV",
      "High-Speed Wi-Fi",
      "Mini Fridge",
      "Hair Dryer",
      "Luxury Bathroom Amenities",
    ],
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80",
      suiteRoom,
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "r3",
    name: "Suite Room",
    type: "Premium Suite",
    price: "4200",
    description: "Designed for guests who want luxury, privacy, and comfort.",
    amenities: [
      "Mini Bar",
      "Smart TV",
      "Work Desk",
      "High-Speed Wi-Fi",
      "Air Conditioning",
      "Luxury Bathroom Amenities",
      "Do Not Disturb System",
      "Safe Shield Bathroom Fixture",
    ],
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80",
      suiteRoom,
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80",
  },
];

const Accomodation = () => {
  const [activeRoomId, setActiveRoomId] = useState(rooms[0].id);

  const activeRoom = useMemo(
    () => rooms.find((room) => room.id === activeRoomId) || rooms[0],
    [activeRoomId],
  );

  const amenities = activeRoom?.amenities || [];
  const images = activeRoom?.images || [];

  return (
    <Motion.section
      id="rooms"
      className="relative min-h-screen bg-[#efefef]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex h-full flex-col lg:flex-row">
        <div className="flex w-full flex-col space-y-7 px-5 py-10 sm:px-8 md:py-8 lg:w-2/5 lg:px-12 lg:py-8">
          <div className="text-left">
            <h2 className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-[#6a6a6a] sm:text-sm">
              Accomodations
            </h2>
            <span className="mt-3 inline-block h-[1px] w-14 bg-[#9b7b45] sm:w-20" />
            <h1 className="mt-4 font-serif text-3xl uppercase tracking-[0.08em] text-[#0f1f47] sm:text-4xl lg:text-5xl">
              Luxury Accommodation
            </h1>
          </div>

          <div className="flex flex-1 flex-col justify-center space-y-5">
            {rooms.map((room) => (
              <button
                key={room.id}
                type="button"
                onClick={() => setActiveRoomId(room.id)}
                className={`flex cursor-pointer items-start gap-3 border-l-4 p-3 text-left transition-all duration-300 sm:gap-4 sm:p-4 ${
                  activeRoomId === room.id
                    ? "border-[#0f1f47] bg-[#f7f5f1] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                    : "border-transparent bg-white/90 hover:bg-white"
                }`}
              >
                <img
                  src={room.thumbnail}
                  alt={`${room.name} Thumbnail`}
                  className="h-24 w-28 object-cover sm:h-28 sm:w-40 md:h-32 md:w-48"
                />
                <div className="flex-1 space-y-2 py-1 sm:space-y-3 sm:py-4">
                  <h3
                    className={`font-serif text-xl uppercase tracking-[0.04em] sm:text-2xl md:text-[1.75rem] ${
                      activeRoomId === room.id
                        ? "text-[#0f1f47]"
                        : "text-[#2d2d2d]"
                    }`}
                  >
                    {room.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#9b7b45] sm:text-base md:text-lg">
                    Rs. {parseFloat(room.price).toFixed(2)} / night
                  </p>
                  <p className="line-clamp-2 text-xs text-[#4f4f4f] sm:text-sm">
                    {room.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[340px] w-full sm:h-[430px] md:h-[540px] lg:h-[760px] lg:w-3/5">
          <Swiper
            key={activeRoomId}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            loopAdditionalSlides={3}
            // navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="h-full w-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={`${activeRoomId}-${index}`}>
                <img
                  src={img}
                  alt={activeRoom?.name}
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute bottom-2 right-0 z-20 grid max-w-full grid-cols-4 gap-2 overflow-x-auto border border-[#d8d1c2] bg-[#f6f2ea] p-2 backdrop-blur-md sm:gap-4 sm:p-4">
            {amenities.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center justify-center border-r border-[#d8d1c2] pr-2"
                title={item}
              >
                {amenityIcons[item] || (
                  <CheckCircle2 className="h-6 w-6 text-[#0f1f47] sm:h-7 sm:w-7" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default Accomodation;
