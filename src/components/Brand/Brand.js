import React from "react";
import play from "../../assets/play.png"
import "./Brand.css"
const Brand = () => {
  return (
    <div className="brand">
      <img src={play} alt="logo" />
      <p>MovieVerse</p>
    </div>
  );
};

export default Brand;
