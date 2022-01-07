import React from "react";
import "./navbar.scss";

const Navbar = () => {
  const name = "< MARC MARÍ />";
  const projects = "< PR0JECTS />";
  return (
    <div className="navbar">
      <div className="container">
        <div className="right">{name}</div>
        <div className="right">{projects}</div>
      </div>
    </div>
  );
};

export default Navbar;
