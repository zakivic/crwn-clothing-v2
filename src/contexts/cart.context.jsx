import { createContext, useState, useEffect } from "react";

const addProduct = (cartItems, product) => {
  const existigProduct = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  //case where the product exist
  if (existigProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === existigProduct.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // case where the product does not exist
  return [...cartItems, { ...product, quantity: 1 }];
};

const removeProduct = (cartItems, cartItemToRemove) => {
  const existigProduct = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existigProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existigProduct.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeCheckoutItem = (cartItems, checkoutItemToRemove) => {
  return cartItems.filter(
    (cartItem) => cartItem.id !== checkoutItemToRemove.id
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  itemCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addProduct(cartItems, product));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeProduct(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (checkoutItemToRemove) => {
    setCartItems(removeCheckoutItem(cartItems, checkoutItemToRemove));
  };

  useEffect(() => {
    const newItemsCount = cartItems.reduce(
      (total, currentItem) => (total += currentItem.quantity),
      0
    );
    setItemCount(newItemsCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, currentItem) =>
        (total += currentItem.quantity * currentItem.price),
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    itemCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
