import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div data-aos="fade-up" data-aos-once="true" className="product">
      <div className="product__info">
        <p>{title}</p>
        <small>&#8377;</small>
        <strong>{price}</strong>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
