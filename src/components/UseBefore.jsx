import React from "react";
import "./usebefore.css";
import bgImage from "../assets/Images/Hero/Background Image.png"; // change path if needed
import videoThumb from "../assets/images/usebefore/Image.png"; // change path
// import playIcon from "../assets/play.svg"; // optional if you want an svg

export default function UseBefore() {
  return (
    <section className="usebefore-section">
      <div
        className="usebefore-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <h2 className="usebefore-title">HOW TO USE THE APP PERFECTLY</h2>

      <p className="usebefore-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim.
      </p>

      <div className="usebefore-video">
        <img src={videoThumb} alt="Video Preview" className="usebefore-image" />

        <div className="usebefore-play">
          <div className="usebefore-circle usebefore-c1"></div>
          <div className="usebefore-circle usebefore-c2"></div>
          <div className="usebefore-circle usebefore-c3"></div>

          <span className="usebefore-play-icon">▶</span>
        </div>
      </div>
    </section>
  );
}
