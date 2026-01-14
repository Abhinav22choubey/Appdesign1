import React from "react";
import "./team.css";

import member1 from "../assets/images/TeamAndReviews/Profile.png";
import member2 from "../assets/images/TeamAndReviews/image.png";
import member3 from "../assets/images/TeamAndReviews/Profile Image (1).png";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const team = [
  { name: "Carla Press", role: "App Developer", img: member1 },
  { name: "Craig Gouse", role: "UI/UX Designer", img: member2 },
  { name: "Jocelyn Septimus", role: "Website Developer", img: member3 },
];

export default function Team() {
  return (
    <section className="ct-section">
      <h2 className="ct-heading">Our Creative Team</h2>
      <p className="ct-subtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>

      <div className="ct-grid">
        {team.map((m, i) => (
          <div className="ct-card" key={i}>
            <div className="ct-avatar-wrap">
              <img src={m.img} alt={m.name} />
            </div>

            <h3 className="ct-name">{m.name}</h3>
            <h4 className="ct-role">{m.role}</h4>

            <p className="ct-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="ct-socials">
              <FaFacebookF className="social-icon" />
              <span />
              <FaInstagram className="social-icon" />
              <span />
              <FaTwitter className="social-icon" />
              <span />
              <FaYoutube className="social-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
