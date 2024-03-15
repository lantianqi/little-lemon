import cta_image from "./assets/restauranfood.jpg";
import Button1 from "./Button1";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="cta-container">

      <div id="cta-left">
        <h1 className="cta-title">Little Lemon</h1>
        <h2 className="cta-subtitle">Chicago</h2>
        <p className="cta-p">We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with
          a modern twist.
        </p>
        <Link to={"/reservations"} className="button-link">
          <Button1 text="Reserve a Table" />
        </Link>
      </div>

      <div id="cta-right">
        <div id="cta-image">
          <img src={cta_image} alt="serve food photo" />
        </div>
      </div>

    </div>
  );
}

export default Hero;
