import Button from "./Button";
import Card from "./Card";
import greek_salad from "./assets/greek_salad.jpg";
import bruchetta from "./assets/bruchetta.jpg";
import lemon_dessert from "./assets/lemon_dessert.jpg";

import { Link } from "react-router-dom";

import "./CSS/Specials.css";

const cards = [
  {
    food_name: "Greek salad",
    food_price: "$12.99",
    food_description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    img_src: greek_salad,
  },
  {
    food_name: "Bruchetta",
    food_price: "$5.99",
    food_description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    img_src: bruchetta,
  },
  {
    food_name: "Lemon Dessert",
    food_price: "$5.00",
    food_description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    img_src: lemon_dessert,
  },
];

const CardsList = (props) => {
  const cardsList = props.data.map((card, index) => {
    return (
      <Card
        id={"card" + index}
        key={"card" + index}
        food_name={card.food_name}
        food_price={card.food_price}
        food_description={card.food_description}
        img_src={card.img_src}
      />
    );
  });
  return <ul>{cardsList}</ul>;
};

function Specials() {
  return (
    <div className="specials-container">
      <div id="specials-top">
        <h1>This week's specials!</h1>
        <div id="specials-top-button">
          <Link to="/menu" className="button-link">
            <Button text="Online Menu" />
          </Link>
        </div>
      </div>

      <div id="specials-content">
        <div id="specials-cards">{<CardsList data={cards} />}</div>
      </div>
    </div>
  );
}

export default Specials;
