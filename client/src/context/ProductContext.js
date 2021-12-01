import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productFeed, setProductFeed] = React.useState(null);

  //get all items
  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setProductFeed(data);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productFeed,
        setProductFeed,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
