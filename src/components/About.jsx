import "./about.css";
import phone from "../assets/images/About/android-smartphone-free-mockup 1.png";
import { FaCheck } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Our App</h2>
      <p className="about-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
        Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus.
      </p>

      <div className="about-content">
        <div className="about-image">
          <img src={phone} alt="App mockup" />
        </div>

        <div className="about-cards">
          <div className="about-card">
            <FaCheck className="icon" />
            <div>
              <h4>Creative Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="about-card">
            <FaCheck className="icon" />
            <div>
              <h4>Easy To Use</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="about-card">
            <FaCheck className="icon" />
            <div>
              <h4>Best User Experience</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
