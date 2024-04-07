import cta_image from "./assets/restauranfood.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./CSS/CTA.css";

function Hero() {
  return (
    <div className="cta-container">
      <div id="cta-left">
        <h1 className="display_title cta_title">Little Lemon</h1>
        <h2 className="subtitle cta-subtitle">Chicago</h2>
        <p className="lead_text cta-p">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to={"/reservations"} className="button-link">
          <Button text="Reserve a Table" />
        </Link>
      </div>

      <div id="cta-right">
        <div id="cta-image">
          <img src={cta_image} alt="serve food" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
