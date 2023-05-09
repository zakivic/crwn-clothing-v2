import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import styles from "./cart-icon.module.css";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemCount } = useContext(CartContext);
  const handelToggle = () => setIsCartOpen(!isCartOpen);

  return (
    <div className={styles["cart-icon-container"]} onClick={handelToggle}>
      <ShoppingIcon className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
