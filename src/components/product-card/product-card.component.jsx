import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import styles from "./product-card.module.css";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className={styles["product-card-container"]}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={styles["footer"]}>
        <span className={styles["name"]}>{name}</span>
        <span className={styles["price"]}>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addItemToCart(product)}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
