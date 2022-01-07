import React from "react";
import "./home.scss";
import img from "../../img/marc.png";
import "animate.css";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const shirt = "< DESIGN + CODE + ♡ />";
  return (
    <div className="home">
      <div className="marc">
        <div className="name animate__fadeInDown">
          <span>Hi, I'm</span>
          <span className="details">Marc</span>
          <h6>- Web Developer - Front-end - UX/UI -</h6>
        </div>

        <div className="hoverme">
          {/* <p>Hover over me</p> */}
          <IoIosArrowDown className="arrow" />
          <img src={img} alt="" className="image" />
          <h1>{shirt}</h1>
        </div>

        <div className="separator"></div>
      </div>
      <div className="about"></div>
      <div className="skills"></div>
      <div className="contact"></div>
    </div>
  );
};

export default Home;
