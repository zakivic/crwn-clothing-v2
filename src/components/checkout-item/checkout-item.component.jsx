import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import styles from "./checkout-item.module.css";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className={styles["checkout-item-container"]}>
      <div className={styles["image-container"]}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={styles["name"]}> {name} </span>
      <span className={styles["quantity"]}>
        <div className={styles["arrow"]} onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className={styles["value"]}>{quantity}</span>
        <div className={styles["arrow"]} onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className={styles["price"]}> {price}</span>
      <div className={styles["remove-button"]} onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
