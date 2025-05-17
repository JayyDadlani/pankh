import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export const BlogDetail = () => {
  const { id } = useParams();

  return (
    <>
      <section id="blog" className="my-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl text-center font-bold my-10">
            {blogs[id - 1].title}
          </h1>

          <div>
            <img
              src={blogs[id - 1].imagePath}
              alt="Blog detail"
              className="w-full h-[75vh] object-cover rounded-lg"
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
            <p className="text-[#6C6C6C] text-lg md:text-xl lg:text-2xl text-justify font-medium my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate corrupti, nihil dolores, magni necessitatibus voluptate
              odit eos a molestias incidunt reprehenderit eius voluptatem
              aliquid dolorem?
            </p>
            <p className="text-[#6C6C6C] text-lg md:text-xl lg:text-2xl text-justify font-medium my-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, suscipit. Eveniet, exercitationem officiis voluptates
              harum repellat unde dolores nam reiciendis magnam consequatur ea
              cupiditate cum molestiae aspernatur quibusdam praesentium
              perspiciatis architecto natus delectus atque quod?
            </p>
            <p className="text-[#6C6C6C] text-lg md:text-xl lg:text-2xl text-justify font-medium my-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, tenetur!
            </p>
            <p className="text-[#6C6C6C] text-lg md:text-xl lg:text-2xl text-justify font-medium my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit similique vitae impedit repellat adipisci facilis.
            </p>
            <p className="text-[#6C6C6C] text-lg md:text-xl lg:text-2xl text-justify font-medium my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              perspiciatis repudiandae asperiores saepe ab quis at porro vitae
              exercitationem esse.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
