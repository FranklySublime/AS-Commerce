import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [itemCount, setItemCount] = useState(1);

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        itemCount,
        setItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
