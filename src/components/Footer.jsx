import React from "react";

import "../styles/Footer.css";
import Icons from "../Icons";

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-corp-info">
        <div className="footer-logo-name">
          <div className="footer-corp-logo"></div>
          <div className="footer-corp-name">
            Hongye Landscaping Construction & Construction
          </div>
        </div>
        <ul className="footer-service">
          <li>Interlocking</li>
          <li>Backyard Patio Installation</li>
          <li>Natural Stone Installation</li>
          <li>Wall & Steps Retaing</li>
          <li>Flower Beding</li>
          <li>Garden Light Installation</li>
        </ul>
      </div>
      <div className="footer-contact">
        <div className="footer-contact-title">Get In Touch</div>
        <div className="footer-contact-email">Haobo1012@gmail.com</div>
        <div className="footer-contact-phone">647-780-0008</div>
        <div className="footer-contact-wechat"></div>
      </div>
      <div className="footer-links">
        <div className="footer-links-title">Quick Links</div>
        <div>
          <a href="#homepage">
            <Icons.Triangle />
            Homepage
          </a>
        </div>
        <div>
          <a href="#aboutus">
            <Icons.Triangle />
            About Us
          </a>
        </div>
        <div>
          <a href="#service">
            <Icons.Triangle />
            Our Services
          </a>
        </div>
        <div>
          <a href="#">
            <Icons.Triangle />
            Our Pricing
          </a>
        </div>
        <div>
          <a href="#">
            <Icons.Triangle />
            Contact Us
          </a>
        </div>

        <div className="SocialIcons">
          <Icons.Email />
          <Icons.Wechat />
          <Icons.Call />
        </div>
      </div>
    </div>
  );
}

export default Footer;
