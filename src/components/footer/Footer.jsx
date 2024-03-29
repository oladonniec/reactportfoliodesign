import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Abdulsemiu
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Abdulsemiu Portfolio. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
