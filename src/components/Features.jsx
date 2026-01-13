import "./features.css";
import phone from "../assets/images/Features/App.png";
import bg from "../assets/images/Hero/Background Image.png";
import chatIcon from "../assets/images/Features/comment.png";
import browserIcon from "../assets/images/Features/browser.png";
import vectorIcon from "../assets/images/Features/vector.png";
import phoneIcon from "../assets/images/Features/cell-phone.png";
import retinaIcon from "../assets/images/Features/eye-scanner 1.png";
import supportIcon from "../assets/images/Features/male-telemarketer.png";

export default function AppFeatures() {
  return (
    <section className="features" style={{ backgroundImage: `url(${bg})` }}>
      <h2 className="features-title">App Features</h2>
      <p className="features-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
      </p>

      {/* Chat */}
      <Feature
        className="chat"
        icon={chatIcon}
        title="Full Free Chat"
        align="center"
      />

      <div className="features-layout">
        <div className="features-col right">
          <Feature icon={browserIcon} title="Unlimited Features" align="right" />
          <Feature icon={vectorIcon} title="Awesome UI Design" align="right" />
        </div>

        <div className="features-phone">
          <img src={phone} alt="App Preview" />
        </div>

        <div className="features-col left">
          <Feature icon={phoneIcon} title="iOS & Android Version" />
          <Feature icon={retinaIcon} title="Retina Ready Graphics" />
        </div>
      </div>

      <div className="features-bottom">
        <Feature icon={supportIcon} title="24/7 Support by Real People" center />
      </div>
    </section>
  );
}

function Feature({ title, icon, align, center, className = "" }) {
  return (
    <div className={`features-card ${align} ${center ? "center" : ""} ${className}`}>
      <img src={icon} className="features-icon" alt="" />
      <h4>{title}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}
