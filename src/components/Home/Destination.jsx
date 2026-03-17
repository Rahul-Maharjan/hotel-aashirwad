import { motion as Motion } from "framer-motion";

const activities = [
  {
    title: "Phewa Lake Boating",
    image:
      "https://images.unsplash.com/photo-1580439225714-27f6f9f8f40a?auto=format&fit=crop&w=1400&q=80",
    description:
      "Enjoy a peaceful boat ride on beautiful Phewa Lake with stunning Annapurna views.",
    duration: "1-2 hours",
    difficulty: "Easy",
    availability: "Year-round",
    highlights: [
      "Visit Tal Barahi Temple in the middle of the lake",
      "Beautiful reflection of Mount Machhapuchhre",
      "Peaceful lake experience",
    ],
  },
  {
    title: "Sarangkot Sunrise View",
    image:
      "https://images.unsplash.com/photo-1633201677731-687f832451f1?auto=format&fit=crop&w=1400&q=80",
    description:
      "Watch a breathtaking Himalayan sunrise from one of Pokhara's most iconic viewpoints.",
    duration: "2-3 hours",
    difficulty: "Easy",
    availability: "Best in the morning",
    highlights: [
      "Photography opportunity",
      "Panoramic mountain views",
      "Sunrise over the Annapurna range",
    ],
  },
  {
    title: "Lakeside Walking Tour",
    image:
      "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=1400&q=80",
    description:
      "Take a relaxing walk around Lakeside Pokhara with cafes, shops, and lake views.",
    duration: "1-2 hours",
    difficulty: "Easy",
    availability: "Year-round",
    highlights: [
      "Lakeside cafes and restaurants",
      "Local shops and handicrafts",
      "Beautiful sunset views",
    ],
  },
  {
    title: "Davis Falls Exploration",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    description:
      "Explore the famous Davis Falls, known for its dramatic underground waterfall tunnel.",
    duration: "1 hour",
    difficulty: "Easy",
    availability: "Year-round",
    highlights: [
      "Local souvenir shops",
      "Nearby Gupteshwor Cave",
      "Unique waterfall tunnel",
    ],
  },
  {
    title: "World Peace Pagoda Visit",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    description:
      "Visit the serene World Peace Pagoda with panoramic views of Pokhara and Phewa Lake.",
    duration: "2-3 hours",
    difficulty: "Easy",
    availability: "Year-round",
    highlights: [
      "Peaceful environment",
      "Amazing lake and mountain views",
      "Beautiful white pagoda",
    ],
  },
];

const ActivitiesSection = () => {
  return (
    <section className="bg-[#efefef] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-[#6a6a6a]">
            Activities
          </p>
          <h2 className="mb-4 font-serif text-3xl uppercase tracking-[0.14em] text-[#111111] sm:text-4xl">
            Exciting Activities
          </h2>
          <p className="text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
            Experience the best of Pokhara with unforgettable adventures and cultural experiences. From scenic mountain
            views and peaceful lake moments to famous landmarks, discover what makes Pokhara truly unique.
          </p>
        </Motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <Motion.article
              key={activity.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="flex h-full flex-col bg-[#f7f5f1] shadow-[0_12px_24px_rgba(0,0,0,0.07)]"
            >
              <img src={activity.image} alt={activity.title} className="h-64 w-full object-cover" />

              <div className="flex flex-1 flex-col p-6 text-center sm:p-7">
                <h3 className="mb-4 font-serif text-xl uppercase tracking-[0.08em] text-[#1a1a1a]">
                  {activity.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-[#4a4a4a] sm:text-sm">{activity.description}</p>

                <button
                  type="button"
                  className="mt-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-[#9b7b45] transition-colors duration-300 hover:text-[#7f612f]"
                >
                  Discover more
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
