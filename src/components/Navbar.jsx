import React from "react";
import logoimg from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logoimg} alt="react logo" />
      <h2>ReactFacts</h2>

      <h3>React Course-project1</h3>
    </nav>
  );
};

export default Navbar;
