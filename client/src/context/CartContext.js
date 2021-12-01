import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState(
    sessionStorage.getItem("shoppingCart")
      ? JSON.parse(sessionStorage.getItem("shoppingCart"))
      : []
  );

  let totalPrice = 0;
  let totalQuantity = 0;
  shoppingCart.forEach((item) => {
    totalPrice += Number(item.price?.replace("$", "")) * Number(item.quantity);
    totalQuantity += item.quantity;
  });

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        totalPrice,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
