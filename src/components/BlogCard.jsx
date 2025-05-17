import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, title, excerpt, body, posted_on, read_time, imagePath } = blog;

  return (
    <Link to={`/blogs/${id}`}>
      <div className="bg-gradient-to-b from-primary to-secondary p-[1px] rounded-md h-full">
        <div className="bg-white rounded-md shadow-md overflow-hidden flex flex-col h-full">
          <img
            src={imagePath}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{posted_on}</span>
              <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-semibold cursor-pointer">
                Read more
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
