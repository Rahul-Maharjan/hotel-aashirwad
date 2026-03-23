import { motion as Motion } from "framer-motion";
import { activitiesData } from "../../data/activitiesData";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
          <h2 className="mb-4 font-serif text-3xl uppercase tracking-[0.14em] text-[#111111] sm:text-4xl uppercase">
            Experience Pokhara
          </h2>
          <p className="text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
            Experience the best of Pokhara with unforgettable adventures and cultural experiences. From scenic mountain
            views and peaceful lake moments to famous landmarks, discover what makes Pokhara truly unique.
          </p>
          <Motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/activities" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f1f47] pb-1 border-b border-[#0f1f47] hover:text-[#9b7b45] hover:border-[#9b7b45] transition-colors">
              View All Activities <ArrowRight className="w-4 h-4" />
            </Link>
          </Motion.div>
        </Motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activitiesData.map((activity, index) => (
            <Motion.article
              key={activity.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="flex h-full flex-col bg-[#f7f5f1] shadow-[0_12px_24px_rgba(0,0,0,0.07)] group"
            >
              <div className="overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.imageAlt || activity.name} 
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              <div className="flex flex-1 flex-col p-6 text-center sm:p-7">
                <h3 className="mb-4 font-serif text-xl uppercase tracking-[0.08em] text-[#1a1a1a]">
                  {activity.name}
                </h3>

                <p className="mb-5 text-sm leading-7 text-[#4a4a4a] sm:text-sm">{activity.shortDescription}</p>

                <div className="mt-auto grid grid-cols-2 gap-2 text-xs text-[#6a6a6a] border-t border-[#e5e5e5] pt-4 mb-4">
                  <div className="flex flex-col">
                    <span className="uppercase tracking-wider font-semibold text-[#9b7b45] mb-1">Duration</span>
                    <span>{activity.details.duration}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase tracking-wider font-semibold text-[#9b7b45] mb-1">Availability</span>
                    <span>{activity.details.availability}</span>
                  </div>
                </div>

                <a
                  href={`/activities/${activity.id}`}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#9b7b45] transition-all duration-300 hover:text-[#7f612f] group-hover:translate-x-1"
                >
                  Learn More
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
