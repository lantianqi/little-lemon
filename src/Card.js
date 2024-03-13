import "./Card.css";

function Card(props) {
  return (
    <div className="card" id={props.id} key={props.card_key}>

      <div className="card-image">
        <img src={props.img_src} alt="" />
      </div>

      <div className="card-main">
        <div className="card-food-name">
          <h1>{props.food_name}</h1>
        </div>
        <div className="card-food-price">
          <p>{props.food_price}</p>
        </div>
        <div className="card-food-description">
          <p>{props.food_description}</p>
        </div>
        <div className="card-order-delivery">
          Order a delievery
        </div>
      </div>

    </div>
  )
}

export default Card;