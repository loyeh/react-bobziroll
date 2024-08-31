import React from "react";
import logoimg from "../logo.svg";

const Navbar = ({ score }) => {
  return (
    <nav className="navbar">
      <h2>About</h2>

      <h3>SCORE: {score}</h3>
    </nav>
  );
};

export default Navbar;
