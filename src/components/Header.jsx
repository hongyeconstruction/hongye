import React, { useEffect, useState } from "react";

import ServiceAccess from "./ServiceAccess";
import "../styles/Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <ul className="nav-left">
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
      <ul className="nav-right">
        <li href="#">
          <ServiceAccess />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
