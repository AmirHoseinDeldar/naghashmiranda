import React from "react";
import { FaLaptop } from "react-icons/fa6";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <h1>Miranda</h1>
      <FaLaptop className="icon" />
    </div>
  );
};

export default Logo;
