import React, { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // storing cart info into session storage
  const [shoppingCart, setShoppingCart] = useState(
    sessionStorage.getItem("shoppingCart")
      ? JSON.parse(sessionStorage.getItem("shoppingCart"))
      : []
  );
  let navigate = useNavigate();

  // states for tracking the total cart price and quantites
  let totalPrice = 0;
  let totalQuantity = 0;
  shoppingCart.forEach((item) => {
    totalPrice += Number(item.price?.replace("$", "")) * Number(item.quantity);
    totalQuantity += item.quantity;
  });

  // sending cart data to mongodb
  const handleCartDb = (obj) => {
    fetch("/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: obj._id,
        item_qty: obj.quantity,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("JSON", json);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  // deleting cart item from mongo
  const handleRemoveCartDb = (id) => {
    fetch(`/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("JSON", json);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  // transfer cart to order in mongodb
  const handleToOrder = (e) => {
    e.preventDefault();
    fetch("/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("JSON", json);
        fetch("/items", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            item_ids: shoppingCart.map((item) => item._id),
          }),
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setShoppingCart([]);
            sessionStorage.removeItem("shoppingCart");
            navigate("../confirmation", { replace: true });
          });
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        totalPrice,
        totalQuantity,
        handleCartDb,
        handleRemoveCartDb,
        handleToOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
