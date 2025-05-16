import slider from "../assets/slider.gif";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import goal from "../assets/goal.png";
import Card from "../components/Card";
import brandLogo from "../assets/brand-logo.png";
import feather from "../assets/bg-feather.png";
import feathers from "../assets/bg-feathers.png";

// import cardIcon1 from "../assets/card-icon-1.png";
import cardIcon2 from "../assets/card-icon-2.png";
import cardIcon3 from "../assets/card-icon-3.png";
import cardIcon4 from "../assets/card-icon-4.png";
import cardIcon5 from "../assets/card-icon-5.png";
import cardIcon6 from "../assets/card-icon-6.png";
import cardIcon7 from "../assets/card-icon-7.png";
import cardIcon8 from "../assets/card-icon-8.png";
import cardIcon9 from "../assets/card-icon-9.png";
import cardIcon10 from "../assets/card-icon-10.png";
import cardIcon11 from "../assets/card-icon-11.png";

const services = [
  {
    title: "Transpersonal Psychology",
    description:
      "Transpersonal psychology provides a variety of approaches to self-actualization, including meditation and mindfulness practices, spiritual practices, exploration of altered states of consciousness",
    iconSrc: cardIcon5,
  },
  {
    title: "Body Psychotherapy",
    description:
      "Body psychotherapy is a branch of psychotherapy that involves the body as well as the mind in the therapeutic process. It is based on the principle that there is a functional unity between the mind and body.",
    iconSrc: cardIcon6,
  },
  {
    title: "Somatic Experiencing",
    description:
      "Somatic experiencing (SE) is a form of alternative therapy aimed at treating trauma and stress-related disorders, such as post-traumatic stress disorder (PTSD). The primary goal of SE is to modify the trauma-related stress response through bottom-up processing.",
    iconSrc: cardIcon7,
  },
  {
    title: "Transgenerational Psychology",
    description:
      "Transgenerational trauma is the psychological and physiological effects that the trauma experienced by people has on subsequent generations in that group. ",
    iconSrc: cardIcon8,
  },
  {
    title: "Gestalt Psychology",
    description:
      "Gestalt psychology, gestaltism,  or configurationism is a school of  psychology and a theory of perception that emphasises the processing of entire patterns and configurations, and not merely individual components.",
    iconSrc: cardIcon9,
  },
  {
    title: "Creative Movement Therapy",
    description:
      "The Therapeutic use of Expressive movement to achieve a balance between emotional, cognitive, social and physical facets in individuals.  This discipline uses body movement to enhance emotional / physical and mental integration in individuals.",
    iconSrc: cardIcon10,
  },
  {
    title: "Compassionate Enquiry",
    description:
      "Using Compassionate Inquiry, the therapist unveils the level of consciousness, mental climate, hidden assumptions, implicit memories and body states that form the real message that words both express and conceal.",
    iconSrc: cardIcon2,
  },
  {
    title: "Narrative Therapy",
    description:
      "It provides the patient with knowledge of their ability to embody these values so they can effectively confront current and future problems. ",
    iconSrc: cardIcon4,
  },
  {
    title: "Counselling Psychology",
    description:
      "Counseling Psychology is a generalist health service (HSP) specialty in professional psychology that uses a broad range of culturally-informed and culturally-sensitive practices to help people improve their well-being, prevent and alleviate distress and maladjustment",
    iconSrc: cardIcon3,
  },
  {
    title: "Custom Psychoeducation Programmes",
    description:
      "Custom psychoeducation programs provide tailored educational interventions for individuals or groups, addressing specific needs and challenges related to mental health or other conditions.",
    iconSrc: cardIcon11,
  },
];

const Services = () => {
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
        <div className="absolute top-0 w-full h-16 bg-gradient-to-br from-primary to-secondary blur-2xl opacity-50 -z-10" />

        {/* CONTENT */}
        <div className="flex justify-center items-center py-20 relative z-10">
          <div className="text-center">
            <img
              src={slider}
              alt="Slider"
              className="w-64 h-12 object-cover mx-auto mb-4"
            />
            <h2 className="text-white text-4xl font-bold">Services</h2>
          </div>
        </div>

        {/* BOTTOM GLOW */}
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-br from-primary to-secondary blur-2xl opacity-50 -z-10" />
      </section>

      <section id="hero-cards" className="my-16">
        <div className="container">
          <div className="lg:flex lg:justify-between lg:gap-8">
            <div className="border-2 border-gray-200 rounded-xl py-12 px-4 my-8 lg:my-0 flex flex-col items-center">
              <div>
                <img
                  src={vision}
                  alt="mission icon"
                  className="w-18 h-18 object-cover"
                />
              </div>
              <div>
                <h3 className="text-center text-3xl xl:text-4xl font-medium my-5 bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
                  Our Mission
                </h3>
                <p className="text-[#503440] text-xl xl:text-2xl text-center font-light my-5">
                  Improving global health through universal access to
                  rehabilitation knowledge
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-xl py-12 px-4 my-8 lg:my-0 flex flex-col items-center">
              <div>
                <img
                  src={goal}
                  alt="mission icon"
                  className="w-18 h-18 object-cover"
                />
              </div>
              <div>
                <h3 className="text-center text-3xl xl:text-4xl font-medium my-5 bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
                  Our Vision
                </h3>
                <p className="text-[#503440] text-xl xl:text-2xl text-center font-light my-5">
                  Open knowledge, open education, open research through global
                  collaboration
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-xl py-12 px-4 my-8 lg:my-0 flex flex-col items-center">
              <div>
                <img
                  src={mission}
                  alt="mission icon"
                  className="w-18 h-18 object-cover"
                />
              </div>
              <div>
                <h3 className="text-center text-3xl xl:text-4xl font-medium my-5 bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
                  Our Goals
                </h3>
                <p className="text-[#503440] text-xl xl:text-2xl text-center font-light my-5">
                  We strive to reach and involve every rehabilitation
                  professional in the world
                </p>
              </div>
            </div>
          </div>

          <div className="my-16">
            <p className="text-[#503440] text-xl xl:text-2xl text-center font-light my-5">
              I offer individual therapy for all genders & adolescents. I also
              work with groups through the spectrum of the creative arts,
              including movement, rhythm; visual aesthetics, story-telling &
              narrative therapy. I focus greatly on the body’s feelings and
              sensations as they are a sign of information that is hidden to not
              interact with it.
            </p>
          </div>
        </div>
      </section>

      <section id="methods" className="my-16">
        <div className="container">
          <h3 className="text-[#503440] text-center text-3xl xl:text-4xl font-medium my-5">
            The integrated approach <br className="block md:hidden" /> uses
            methods from :
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`w-full ${
                  index === 9
                    ? "lg:col-span-1 lg:col-start-2 justify-self-center"
                    : ""
                }`}
              >
                <Card
                  title={service.title}
                  description={service.description}
                  iconSrc={service.iconSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container my-16">
        <p className="text-[#503440] text-xl xl:text-2xl text-center font-light my-5">
          We explore what is your connection to the mind - body and address
          stress which shows up as chronic illnesses, fatigue, confusion,
          chronic pain, immunity disorders, anxiety & depression which bother us
          without solutions in modern medicine.
        </p>
        <p className="text-[#503440] text-xl xl:text-2xl text-center font-light my-5">
          I believe in the benefit of both western and eastern therapeutic
          approaches, through our work together we will build resources for you
          and ways of supporting yourself alone.
        </p>
      </div>

      <div className="bg-gradient-to-r from-primary to-secondary relative py-10 overflow-hidden">
        {/* Overlay behind everything */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

        {/* Feather images as background */}
        <div className="absolute inset-0 z-0">
          <img
            src={feather}
            alt="feather"
            className="absolute top-0 left-0 w-48 h-48 object-cover rotate-45 opacity-20 pointer-events-none select-none"
          />
          <img
            src={feather}
            alt="feather"
            className="absolute top-0 right-0 w-48 h-48 object-cover -rotate-45 opacity-20 pointer-events-none select-none"
          />
        </div>

        {/* Foreground content */}
        <h2 className="container relative z-10 text-center text-3xl xl:text-4xl font-bold my-5 text-white">
          To tap into your resilience by shedding your feathers and growing new
          to fly with more strength and power.
        </h2>
      </div>

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

export default Services;
