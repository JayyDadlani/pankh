import { useState } from "react";

const Card = ({ title, description, iconSrc }) => {
  const [showGradient, setShowGradient] = useState(true);

  const handleMouseEnter = () => {
    setShowGradient(false);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowGradient(true);
    }, 390);
  };

  return (
    <div className="group">
      <div
        className={`p-[2px] rounded-xl bg-gradient-to-r ${
          showGradient ? "from-primary to-secondary" : "from-white to-white"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="perspective-1000 w-full h-[200px] md:h-[300px]">
          <div className="relative w-full h-full duration-500 transition-transform transform-style-3d group-hover:rotate-y-180">
            {/* Front Side */}
            <div className="absolute inset-0 bg-white flex items-center justify-center backface-hidden rounded-xl gap-4 px-12">
              <img
                src={iconSrc}
                alt="Card Icon"
                className="w-16 h-16 object-cover"
              />
              <h2 className="text-xl font-bold text-center">{title}</h2>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary flex flex-col items-center justify-center backface-hidden rotate-y-180 border rounded-xl">
              <h2 className="text-xl font-bold text-white text-center">{title}</h2>
              <p className="text-white px-4 text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
