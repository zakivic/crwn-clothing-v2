import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { UserContext } from "../../contexts/user.contex";
import { CartContext } from "../../contexts/cart.context";

import { useContext } from "react";
import { signOutUser } from "../../utils/firebase.utils";

import styles from "./navigation.module.css";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandeler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <div className={styles["navigation"]}>
        <Link className={styles["logo-container"]} to="/">
          <CrwnLogo className={styles["logo"]} />
        </Link>
        <div className={styles["nav-links-container"]}>
          <Link className={styles["nav-link"]} to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className={styles["nav-link"]} onClick={signOutHandeler}>
              Sign Out
            </span>
          ) : (
            <Link className={styles["nav-link"]} to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
