import { useState, useEffect } from "react";

const isTouchDevice = () => {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
};

const Card = ({ title, description, iconSrc }) => {
  const [showGradient, setShowGradient] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  const handleMouseEnter = () => {
    if (!isTouch) {
      setShowGradient(false);
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouch) {
      setIsFlipped(false);
      setTimeout(() => {
        setShowGradient(true);
      }, 390); // match transition duration
    }
  };

  const handleClick = () => {
    if (isTouch) {
      // toggle flip state first
      const nextFlipped = !isFlipped;
      setIsFlipped(nextFlipped);
      setShowGradient(!nextFlipped); // show gradient only when not flipped
    }
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <div
        className={`p-[2px] rounded-xl bg-gradient-to-r ${
          showGradient ? "from-primary to-secondary" : "from-white to-white"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="perspective-1000 w-full h-[200px] md:h-[300px]">
          <div
            className={`relative w-full h-full duration-500 transition-transform transform-style-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side */}
            <div className="absolute inset-0 bg-white flex items-center justify-center backface-hidden rounded-xl gap-4 px-12">
              <img
                src={iconSrc}
                alt="Card Icon"
                className="w-16 h-16 object-cover"
              />
              <h2 className="text-[#503440] text-xl font-bold text-center">{title}</h2>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary flex flex-col items-center justify-center backface-hidden rotate-y-180 border rounded-xl">
              <h2 className="text-xl font-bold text-white text-center">
                {title}
              </h2>
              <p className="text-white px-4 text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
