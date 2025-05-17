import slider from "../assets/slider.gif";
import feathers from "../assets/bg-feathers.png";
import BlogCard from "../components/BlogCard";
import brandLogo from "../assets/brand-logo.png";
import { blogs } from "../data/blogs";

const Blogs = () => {
  return (
    <>
      <section id="services" className="relative z-0 overflow-hidden">
        {/* FEATHERS */}
        <div className="absolute left-0 top-[50%] translate-y-[-50%] rotate-45">
          <img
            src={feathers}
            alt="feathers"
            className="w-48 h-48 object-cover opacity-50"
          />
        </div>
        <div className="absolute right-0 top-[50%] translate-y-[-50%] -rotate-45">
          <img
            src={feathers}
            alt="feathers"
            className="w-48 h-48 object-cover opacity-50"
          />
        </div>

        {/* BG BLACK */}
        <div className="absolute bg-black w-full h-full -z-50"></div>

        {/* TOP GLOW  */}
        <div className="absolute top-0 w-full h-12 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-50 -z-10" />

        {/* CONTENT */}
        <div className="z-20 text-white">
          <div className="container">
            <h2 className="text-4xl sm:text-5xl xl:text-6xl text-center font-light my-10 py-10">
              Healing Through Movement:{" "}
              <span className="font-bold">
                The Power of Dance Movement Therapy
              </span>
            </h2>
          </div>
        </div>

        {/* BOTTOM GLOW */}
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-50 -z-10" />
      </section>

      <section id="slider">
        {/* CONTENT */}
        <div className="flex justify-center items-center py-20 relative z-10">
          <div className="rounded-full">
            <img
              src={slider}
              alt="Slider"
              className="w-256 h-2 object-cover mx-auto mb-4"
            />
            <h2 className="text-center text-4xl font-bold">
              Stay Updated with Our Latest News and Blog
            </h2>
          </div>
        </div>
      </section>

      <section id="cards" className="my-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </section>

      <section id="book-now" className="my-16">
        <div className="container">
          <div className="flex justify-center">
            <img
              src={brandLogo}
              alt="brand logo"
              className="w-48 object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-[#503440] text-4xl xl:text-5xl text-center font-light my-5">
              <span className="font-bold">Wondering if</span>
              <br className="block sm:hidden" /> The Pankh Project
              <br className="block lg:hidden" />
              <span className="font-bold">is right for you?</span>
            </h3>
            <p className="text-[#503440] text-2xl text-center font-light my-5">
              Free Consult Here
            </p>
            <button className="border-2 border-[#AA587C] relative overflow-hidden px-20 py-5 text-2xl rounded-full font-semibold transition-all duration-300 hover:text-white hover:border-transparent text-[#5B434E] bg-white hover:bg-gradient-to-r from-primary to-secondary shadow-[inset_0px_0px_15px_var(--color-primary),inset_-0px_-0px_15px_var(--color-secondary)] hover:shadow-none outline-none focus:ring-0 focus:outline-none my-5">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
