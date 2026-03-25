import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRoomSection } from "../../hooks/useRoomSection";

const Accomodation = () => {
  const { data, loading, error } = useRoomSection();
  const [activeRoomId, setActiveRoomId] = useState(null);

  const rooms = useMemo(() => data?.items || [], [data]);

  useEffect(() => {
    if (rooms.length > 0 && activeRoomId === null) {
      setActiveRoomId(rooms[0].id);
    }
  }, [rooms, activeRoomId]);

  const activeRoom = useMemo(
    () => rooms.find((room) => room.id === activeRoomId) || rooms[0],
    [activeRoomId, rooms]
  );

  if (loading || !activeRoom) return null;

  return (
    <section id="rooms" className="relative bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

        {/* Left Side: Text and Navigation */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9b7b45] mb-4">
              {data?.section_title || "Accommodations"}
            </h2>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0f1f47] leading-tight mb-6"
                dangerouslySetInnerHTML={{ __html: data?.headline ? data.headline.replace("Rest In Luxury", "Rest <br className=\"hidden lg:block\" />In Luxury") : "Rest <br className=\"hidden lg:block\" />In Luxury" }}
            />
            <p className="text-[#4f4f4f] leading-relaxed max-w-md">
              {data?.description || "Experience unparalleled comfort and style. Every room is designed to provide a perfect sanctuary during your stay in Pokhara."}
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            {rooms.map((room) => {
              const isActive = activeRoomId === room.id;

              return (
                <div
                  key={room.id}
                  onMouseEnter={() => setActiveRoomId(room.id)}
                  className={`group py-4 border-b border-[#e5e5e5] cursor-pointer transition-colors duration-300 ${isActive ? "border-[#0f1f47]" : "hover:border-[#9b7b45]"
                    }`}
                >
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${isActive ? "text-[#0f1f47]" : "text-[#888888] group-hover:text-[#2d2d2d]"
                        }`}>
                        {room.room_name}
                      </h3>

                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}>
                        <p className="text-[#9b7b45] text-sm font-semibold tracking-wider uppercase mb-2">
                          {room.currency} {room.price} / Night
                        </p>
                        <p className="text-sm text-[#6a6a6a] line-clamp-2 pr-8">
                          {room.excerpt}
                        </p>
                        <Link
                          to={`/rooms/${room.slug}`}
                          className="inline-flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-widest text-[#0f1f47] pb-1 border-b border-[#0f1f47] hover:text-[#9b7b45] hover:border-[#9b7b45] transition-colors"
                        >
                          Explore Room <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Image Display */}
        <div className="w-full lg:w-7/12 h-[500px] lg:h-[700px] relative overflow-hidden bg-gray-100 shadow-xl">
          <AnimatePresence mode="wait">
            <Motion.img
              key={activeRoom.id}
              src={activeRoom.featured_image}
              alt={activeRoom.room_name}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#0f1f47]">
            {activeRoom.room_type}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Accomodation;
