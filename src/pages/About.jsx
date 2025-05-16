import slider from "../assets/slider.gif";
import hero from "../assets/about-hero.jpg";
import brandLogo from "../assets/brand-logo.png";
import feathers from "../assets/bg-feathers.png";

const About = () => {
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
        <div className="flex justify-center items-center py-20 relative z-10">
          <div className="text-center">
            <img
              src={slider}
              alt="Slider"
              className="w-64 h-12 object-cover mx-auto mb-4"
            />
            <h2 className="text-white text-4xl font-bold">About Me</h2>
          </div>
        </div>

        {/* BOTTOM GLOW */}
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-50 -z-10" />
      </section>

      <section id="hero" className="my-16">
        <div className="container">
          <div>
            <img
              src={hero}
              alt="hero"
              className="w-full h-[75vh] object-cover rounded-lg object-right"
            />
          </div>
          <div>
            <h3 className="text-[#212121] text-4xl sm:text-5xl text-center font-light my-5">
              Tarini
            </h3>
            <h2 className="text-5xl sm:text-6xl xl:text-7xl text-center font-light my-10 bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
              Heal Your Soul <br className="block lg:hidden" /> Through Dance
            </h2>
            <p className="text-[#503440] text-lg md:text-xl lg:text-2xl text-justify font-medium my-5">
              And often, to our great frustration, the most potent catalysts for
              healing are also the last things we would put our hands up for. In
              my own case, a decade of living with autoimmune disease has been
              an ongoing education in learning the language of bodies.
            </p>
            <p className="text-[#503440] text-lg md:text-xl lg:text-2xl text-justify font-medium my-5">
              Not finding the support or the answers I needed through
              traditional medical routes, I felt invisible and frustrated.
              Despite being told I would have to accept a chronic and
              progressive prognosis, a part of me knew this was not true; that
              my body was capable of healing and that there was a way through
              this.
            </p>
            <p className="text-[#503440] text-lg md:text-xl lg:text-2xl text-justify font-medium my-5">
              Slowly, I began to find the right therapies and protocols that
              helped me to get to the root of why I had fallen so unwell, and
              how to address them for lasting health.
            </p>
            <p className="text-[#503440] text-lg md:text-xl lg:text-2xl text-justify font-medium my-5">
              This wasn’t a quick fix; I spent years researching and
              subsequently re-training, because I so passionately believed in
              the approach that I wished someone had been able to show me.
            </p>
            <p className="text-[#503440] text-lg md:text-xl lg:text-2xl text-justify font-medium my-5">
              This pilgrimage through illness and trauma recovery has been a
              powerful teacher and has transformed my definition of health and
              my whole purpose in life.
            </p>
            <p className="text-[#503440] text-lg md:text-xl lg:text-2xl text-justify font-medium my-5">
              I am certified in Anatomy & Physiology, Integral Somatic
              Psychology, Biodynamic Craniosacral Therapy and the
              Psychotherapeutic Approach developed by Gabor Mate, Compassionate
              Inquiry. Psycho-education informs a large part of my work with
              clients as I believe when we can understand why we feel the way we
              do we empower ourselves and this assists in developing a calmer
              baseline from which to heal.
            </p>
          </div>
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
            <h3 className="text-4xl xl:text-5xl text-center font-light my-5">
              <span className="font-bold">Wondering if</span>
              <br className="block sm:hidden" /> The Pankh Project
              <br className="block lg:hidden" />
              <span className="font-bold">is right for you?</span>
            </h3>
            <p className="text-2xl text-center font-light my-5">
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

export default About;
