import React from "react";
import "./footer.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPaperPlane
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="app-footer">
      {/* Contact Card */}
      <div className="app-footer-contact-card">
        <div className="app-footer-contact-item">
          <div className="app-footer-icon-circle">
            <FaEnvelope />
          </div>
          <span className="app-footer-contact-text">info@youremail.com</span>
        </div>

        <div className="app-footer-divider"></div>

        <div className="app-footer-contact-item">
          <div className="app-footer-icon-circle">
            <FaPhoneAlt />
          </div>
          <span className="app-footer-contact-text">+880 321 655 9985</span>
        </div>
      </div>

      {/* Main footer content */}
      <div className="app-footer-container">
        {/* About */}
        <div className="app-footer-about">
          <h3 className="app-footer-logo">LOGO</h3>
          <p className="app-footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
            ante velit vitae. Est tellus vitae, nullam lobortis enim.
          </p>

          <div className="app-footer-social">
            <FaFacebookF />
            <span className="app-footer-social-line"></span>
            <FaInstagram />
            <span className="app-footer-social-line"></span>
            <FaTwitter />
            <span className="app-footer-social-line"></span>
            <FaYoutube />
          </div>
        </div>

        {/* Quick links */}
        <div className="app-footer-links">
          <h4>Quick Link</h4>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Screenshot</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="app-footer-newsletter">
          <h4>News Letter</h4>
          <p>Subscribe our newsletter to get our latest update & news</p>

          <div className="app-footer-email-box">
            <input type="email" placeholder="Your email address" />
            <button>
               <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      <div className="app-footer-bottom-line"></div>

      <div className="app-footer-copyright">
        © Copyright 2021 .Ojjomedia. All Right Reserved.
      </div>
    </footer>
  );
}
