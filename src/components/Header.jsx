import React, { useEffect, useState } from "react";

import ServiceAccess from "./ServiceAccess";
import "../styles/Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [extended, setExtended] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div
        className={`hamburger ${extended ? "open" : ""}`}
        id="mobile-menu"
        onClick={() => setExtended(!extended)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-left ${extended ? "open" : ""}`}>
        <li>
          <a href="#homepage">Home</a>
        </li>
        <li>
          <a href="#aboutus">About us</a>
        </li>
        <li>
          <a href="#service">Our Service</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#footer">Contact us</a>
        </li>
      </ul>
      <div className="nav-right">
        <ServiceAccess />
      </div>
    </nav>
  );
}
// x
export default Header;
