import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="h-[100px] text-white bg-gray-600">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Service</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
