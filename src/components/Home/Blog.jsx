import { useEffect, useRef } from "react";

import blog1 from "../../assets/blog/blog1.jpg";
import blog2 from "../../assets/blog/blog2.jpg";
import blog3 from "../../assets/blog/blog3.jpg";

const blogs = [
  {
    id: 1,
    image: blog1,
    category: "Travel",
    title: "Best Places To Visit In Pokhara",
    desc: "Discover beautiful destinations around Pokhara including lakes and mountains.",
  },
  {
    id: 2,
    image: blog2,
    category: "Hotel Life",
    title: "Experience Comfort At Hotel Aashirwad",
    desc: "Enjoy luxury rooms and warm hospitality during your stay.",
  },
  {
    id: 3,
    image: blog3,
    category: "Local Guide",
    title: "Top Activities To Do In Pokhara",
    desc: "Explore exciting adventures like boating, hiking and paragliding.",
  },
];

const Blog = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");

            entry.target.classList.add("opacity-100", "translate-y-0");

            // Reveal each card once and stop observing to keep scrolling smooth.
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#efefef] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* HEADER */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-serif text-3xl uppercase tracking-[0.14em] text-[#111111] sm:text-4xl">
            Blog
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[#4a4a4a]">
            Discover travel stories, local experiences and useful tips to make
            your stay in Pokhara unforgettable.
          </p>

          <button className="mt-6 text-amber-600 hover:underline">
            Read more →
          </button>
        </div>

        {/* BLOG GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 150}ms` }}
              className="
                text-center group
                opacity-0 translate-y-10
                transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform
              "
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <p className="text-sm uppercase text-gray-500 mt-6">
                {blog.category}
              </p>

              <h3 className="text-xl font-semibold mt-3">{blog.title}</h3>

              <p className="text-gray-600 mt-4 px-6">{blog.desc}</p>

              <button className="mt-6 text-amber-600 hover:underline">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
