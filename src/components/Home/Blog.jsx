import blog1 from "../../assets/blog/blog1.jpg";
import blog2 from "../../assets/blog/blog2.jpg";
import blog3 from "../../assets/blog/blog3.jpg";

 const Blog = () =>{
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

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* BLOG HEADER */}

        <div className="text-center mb-16">
          <h2 className="text-4xl tracking-widest font-light">BLOG</h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Discover travel stories, local experiences and useful tips to make
            your stay in Pokhara unforgettable.
          </p>

          <button className="mt-6 text-amber-600 hover:underline">
            Read more →
          </button>
        </div>

        {/* BLOG CARDS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="text-center">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[420px] object-cover"
              />

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
}
export default Blog;