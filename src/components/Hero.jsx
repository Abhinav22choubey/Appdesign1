import { useState } from "react";
import "./Hero.css";
import heroBg from "../assets/images/Hero/Background Image.png";
import phoneMockup from "../assets/images/Hero/Free Ui View Mobile App Mockup 1.png";
import logo from "../assets/images/Hero/Logo.png";
import googlePlay from "../assets/images/Hero/toppng 1.png";
import appStore from "../assets/images/Hero/PngItem_1144050 2.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Top Bar */}
      <div className="top-bar desktop-only">
        <div className="contact">
          <span><FaEnvelope /> info@youremail.com</span>
          <span><FaPhone /> (480) 555-0103</span>
        </div>
        <div className="social">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>

      {/* Logo (desktop only) */}
      <div className="logo-box desktop-only">
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Navbar */}
      <div className="navbar desktop-only">
        <div className="nav-links">
          <a className="active">Home</a>
          <a>About</a>
          <a>Features</a>
        </div>
        <div className="nav-links">
          <a>Screenshot</a>
          <a>Blog</a>
          <button className="download-btn">Download</button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="navbar mobile-only">
        <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>
        <div className="logo-center">
          <img src={logo} alt="logo" />
        </div>
        <button className="download-btn">Download</button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${open ? "show" : ""}`}>
        <a>Home</a>
        <a>About</a>
        <a>Features</a>
        <a>Screenshot</a>
        <a>Blog</a>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="text-box-border"></div>

        <div className="text-box">
          <h1>A Great App Makes Your Life Better</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <h4>Download App Now</h4>
          <div className="store-buttons">
            <img src={googlePlay} alt="Google Play" />
            <img src={appStore} alt="App Store" />
          </div>
        </div>

        <div className="mockup">
          <img src={phoneMockup} alt="Mobile App" />
        </div>
      </div>
    </section>
  );
}
