import React from "react";
import "./blog.css";

import blog1 from "../assets/images/Blog/b1.png";
import blog2 from "../assets/images/Blog/b2.png";
import blog3 from "../assets/images/Blog/b3.png";

export default function Blog () {
  return (
    <section id="blog" className="orb-section">
      <h2 className="orb-title">Our recent blog</h2>

      <p className="orb-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
        Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
        ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
      </p>

      <div className="orb-cards">

        {/* Card 1 */}
        <div className="orb-card">
          <img src={blog1} alt="blog" className="orb-card-image" />

          <h3 className="orb-card-title">
            The Snap Pixel: How It Works and How to Install
          </h3>

          <p className="orb-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
            Est tellus vitae, nullam lobortis enim.
          </p>

          <a href="#" className="orb-read-more">Read more</a>
        </div>

        {/* Card 2 */}
        <div className="orb-card">
          <img src={blog2} alt="blog" className="orb-card-image" />

          <h3 className="orb-card-title">
            Global Partner Solutions: A Partnership of Innovation
          </h3>

          <p className="orb-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
            Est tellus vitae, nullam lobortis enim.
          </p>

          <a href="#" className="orb-read-more">Read more</a>
        </div>

        {/* Card 3 */}
        <div className="orb-card">
          <img src={blog3} alt="blog" className="orb-card-image" />

          <h3 className="orb-card-title">
            2021: An opportunity for Snapchatters to start fresh
          </h3>

          <p className="orb-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
            Est tellus vitae, nullam lobortis enim.
          </p>

          <a href="#" className="orb-read-more">Read more</a>
        </div>

      </div>
    </section>
  );
}


