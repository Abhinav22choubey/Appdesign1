import React, { useState } from "react";
import "./screenshot.css";

import img004 from "../assets/images/Screenshot/004.png";
import img000 from "../assets/images/Screenshot/000.png";
import img003 from "../assets/images/Screenshot/003.png";
import img001 from "../assets/images/Screenshot/001.png";
import iPhoneX from "../assets/images/Screenshot/iPhoneX-Mockup.png";

import phoneMockup from "../assets/images/Screenshot/App Desgin.png";
import playstore from "../assets/images/Hero/toppng 1.png";
import appstore from "../assets/images/Hero/PngItem_1144050 2.png";

import { FaDownload, FaThumbsUp, FaStar } from "react-icons/fa";

export default function Screenshots() {
  const screenshots = [img000, img003, iPhoneX, img001, img004];
  const [currentIndex, setCurrentIndex] = useState(2);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const total = screenshots.length;
  const getIndex = (i) => (i + total) % total;

  const prevSlide = () => setCurrentIndex(getIndex(currentIndex - 1));
  const nextSlide = () => setCurrentIndex(getIndex(currentIndex + 1));

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div>
      <section id="screenshot" className="screenshot-container">
        <h2 className="screenshot-title">Checkout Our App Interface Look</h2>
        <p className="screenshot-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim.
        </p>

        <div
          className="screenshot-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {screenshots.map((img, index) => {
            let className = "screenshot-img";

            if (index === currentIndex) className += " center";
            else if (index === getIndex(currentIndex - 1)) className += " left";
            else if (index === getIndex(currentIndex + 1))
              className += " right";
            else if (index === getIndex(currentIndex - 2))
              className += " far-left";
            else if (index === getIndex(currentIndex + 2))
              className += " far-right";
            else className += " hidden";

            return (
              <div
                key={index}
                className={className}
                style={{ backgroundImage: `url(${img})` }}
              />
            );
          })}

          <button className="screenshot-arrow left-arrow" onClick={prevSlide}>
            &#8592;
          </button>
          <button className="screenshot-arrow right-arrow" onClick={nextSlide}>
            &#8594;
          </button>
        </div>

        <div className="screenshot-slider">
          {screenshots.map((_, index) => (
            <div
              key={index}
              className={`screenshot-slider-ellipse ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>
      <section className="download-section">
        <div className="download-container">
          {/* Left Content */}
          <div className="download-content">
            <h2 className="download-title">Download App Now</h2>
            <p className="download-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>

            <div className="download-stores">
              <img src={playstore} alt="Play Store" />
              <img src={appstore} alt="App Store" />
            </div>

            <div className="download-stats">
              <StatBox icon={<FaDownload />} value="59865" label="Download" />
              <StatBox icon={<FaThumbsUp />} value="29852" label="Like" />
              <StatBox icon={<FaStar />} value="1500" label="Rating" />
            </div>
          </div>

          {/* Right Image */}
          <div className="download-image">
            <img src={phoneMockup} alt="App Mockup" />
            <div className="download-shadow"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatBox({ icon, value, label }) {
  return (
    <div className="download-stat-box">
      <div className="download-icon">{icon}</div>
      <div className="download-value">{value}</div>
      <div className="download-label">{label}</div>
    </div>
  );
}
