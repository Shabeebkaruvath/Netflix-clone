import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="logo"
      />
      <div className="navend">
        <p>UNLIMITED TV SHOWS & MOVIES</p>
        <button className="jbtn">JOIN NOW</button>
        <button className="sbtn">SIGN IN</button>
      </div>
    </div>
  );
}

export default Navbar;
