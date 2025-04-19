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
        class={`hamburger ${extended ? "open" : ""}`}
        id="mobile-menu"
        onClick={() => setExtended(!extended)}
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
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
