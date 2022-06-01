import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="inner">
        <div className="num">
          <h2>Questions? Call +1-844-505-2993</h2>
        </div>
        <div className="inner1">
          <div className="one">
            <ul>
              <li>FAQ</li>
              <li>Invester Relations</li>
              <li>Way To Watch</li>
              <li>Corporate Informations</li>

              <li>Netflix Originals</li>
            </ul>
          </div>
          <div className="two">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Terms of Use</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="three">
            <ul>
              <li>Account</li>
              <li>Redeem Gift Cards</li>
              <li>Privacy</li>
              <li>Speed test</li>
            </ul>
          </div>
          <div className="four">
            <ul>
              <li>Media Center</li>
              <li>Buy Gift Cards</li>
              <li>Cookie Preference</li>
              <li>Legal Notice</li>
            </ul>
          </div>
        </div>
        <div className="lang">
          <select name="lang" id="cars">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Footer;
