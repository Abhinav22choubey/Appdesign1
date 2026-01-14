import React, { useState, useRef } from "react";
import "./reviews.css";

import profile1 from "../assets/images/TeamAndReviews/prof.jpg";
import profile2 from "../assets/images/TeamAndReviews/prof.jpg";
import profile3 from "../assets/images/TeamAndReviews/prof.jpg";
import background from "../assets/images/Hero/Background Image.png";

const reviews = [
  { profile: profile1, name: "Ann Lubin", role: "Co-Founder", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { profile: profile2, name: "John Doe", role: "CEO", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { profile: profile3, name: "Jane Smith", role: "Marketing Head", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { profile: profile1, name: "Alice Brown", role: "Designer", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { profile: profile2, name: "Bob Martin", role: "Developer", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const getIndex = (index) => {
    const total = reviews.length;
    return (index + total) % total;
  };

  const prevSlide = () => setCurrentIndex(getIndex(currentIndex - 1));
  const nextSlide = () => setCurrentIndex(getIndex(currentIndex + 1));

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <section className="hc-section">
      <div
        className="hc-background"
        style={{ backgroundImage: `url(${background})` }}
      />

      <h2 className="hc-title">OUR HAPPY CUSTOMERS</h2>
      <p className="hc-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="hc-carousel-wrapper">
        <button className="hc-prev" onClick={prevSlide}>‹</button>

        <div
          className="hc-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {reviews.map((item, index) => {
            let className = "hc-review-card hidden";

            if (index === currentIndex) className = "hc-review-card center";
            else if (index === getIndex(currentIndex - 1)) className = "hc-review-card left";
            else if (index === getIndex(currentIndex + 1)) className = "hc-review-card right";

            return (
              <div key={index} className={className}>
                <img src={item.profile} alt={item.name} className="hc-profile" />
                <h3 className="hc-review-name">{item.name}</h3>
                <p className="hc-review-role">{item.role}</p>
                <p className="hc-review-text">{item.text}</p>
              </div>
            );
          })}
        </div>

        <button className="hc-next" onClick={nextSlide}>›</button>
      </div>

      <div className="hc-dots">
        {reviews.map((_, idx) => (
          <span
            key={idx}
            className={`hc-dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}
