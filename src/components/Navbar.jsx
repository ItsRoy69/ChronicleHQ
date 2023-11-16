import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="brand">
        <img className="logo" src={logo} />
        <p>Chronicle</p>
      </div>
      <div className="btn">
        <span>
          <em>Join Beta</em>
        </span>
        <span>
          <em>Join Beta</em>
        </span>
      </div>
    </section>
  );
};

export default Navbar;
