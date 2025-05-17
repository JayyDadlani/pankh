import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export const BlogDetail = () => {
  const { id } = useParams();

  return (
    <>
      <div className="relative h-[1px]">
        <div class="absolute top-0 left-0 w-4 md:w-8 h-[100vh] bg-gradient-to-b from-[#AA587C] to-transparent blur-xl z-0"></div>
      </div>
      
      <section id="blog" className="my-16">
        <div className="container">
          <h1 className="text-[#503440] text-4xl md:text-5xl text-center font-bold my-10">
            {blogs[id - 1].title}
          </h1>

          <div>
            <img
              src={blogs[id - 1].imagePath}
              alt="Blog detail"
              className="w-full h-[50vh] md:h-[75vh] object-cover rounded-lg"
            />
          </div>

          <div id="content">
            <p className="text-[#6C6C6C] text-lg md:text-xl lg:text-2xl text-justify font-medium my-8">
              Posted on: {blogs[id - 1].posted_on}
              <div className="inline-block w-2 h-2 rounded-full bg-[#6C6C6C] align-middle mx-4"></div>
              {blogs[id - 1].read_time} read
            </p>
            <h2 className="text-[#503440] text-3xl sm:text-4xl xl:text-5xl font-medium my-8">
              {blogs[id - 1].title}
            </h2>
            <p className="text-[#6C6C6C] text-lg md:text-xl font-medium my-8">
              “In many shamanic societies, if you came to a medicine person
              complaining of being disheartened, dispirited, or depressed, they
              would ask one of the four questions: “When did you stop dancing?
              When did you stop singing? When did you stop being enchanted by
              stories? When did you stop being comforted by the sweet territory
              of silence?” ― Gabrielle Roth
            </p>
            <p className="text-[#6C6C6C] text-lg md:text-xl font-medium my-8">
              After post graduating in Psychology in 2012, I was certain that
              while I was interested in mental health practice, I was not
              inclined to pursue it as a profession. I wanted to know more about
              women and their struggles. My attention became focused on how
              bodies were viewed in culture and how differently they were
              perceived. What I did not take cognizance of then, was that I was
              studying behaviour, bodies, movement, and its perception all
              along. A decade later, when I finally stepped into the shoes of a
              psychotherapist, I realised that even though I loved working as a
              mental health practitioner, there was always something missing.
              Sure, talk therapy has its own benefits, but as a therapist, I
              started feeling inadequate in my abilities. It led me to start
              attending workshops on drama and movement therapy. It was only
              then that I realised that I was missing taking account perhaps one
              of the most important aspect of a person’s life – the body.
            </p>
            <p className="text-[#6C6C6C] text-lg md:text-xl font-medium my-8">
              Movement has always been close to my heart. It is something that
              gets me going; it makes me feel at ease. I remember while growing
              up, I was always ‘restless’, I would have to be told time and
              again that I could not sit or stand-still. That I was animated. I
              distinctly remember that I couldn’t converse without using my hand
              gestures. I could not – even if I wanted to – express myself
              without my gestures. They belonged to me; they were mine; they
              were… me.
            </p>
            <p className="text-[#6C6C6C] text-lg md:text-xl font-medium my-8">
              While I can recall what used to be, I have no recollection of when
              I stopped moving. From being a girl who loved to dance at the drop
              of a hat, I started resisting it. I think I lost my expression and
              maybe my will to speak or feel. My constant turmoil led me to join
              the diploma course in Dance Movement Therapy in 2020, where I
              spent majority of my time not wanting to move (the classes were
              online), to exhausting myself in movement when the module finally
              moved on-site. I began having nightmares, but I also found space
              in my movement to express them. My breath started meaning more to
              me, and despite my insecurities, I started respecting my body a
              lot more.
            </p>
            <p className="text-[#6C6C6C] text-lg md:text-xl font-medium my-8">
              I would like to end with a quote by Clarissa Pinkola Estes that
              aptly describes my experience with movement so far:
            </p>
            <p className="text-[#6C6C6C] text-lg md:text-xl font-medium my-8">
              “The body remembers, the bones remember, the joints remember, even
              the little finger remembers. Memory is lodged in pictures and
              feelings in the cells themselves. Like a sponge filled with water,
              anywhere the flesh is pressed, wrung, even touched lightly, a
              memory may flow out in a stream.”
            </p>
          </div>
        </div>
      </section>

      <div className="relative h-[1px]">
        <div class="absolute bottom-0 right-0 w-4 md:w-8 h-[100vh] bg-gradient-to-b from-[#FD8950] to-transparent blur-xl z-0"></div>
      </div>
    </>
  );
};
