import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productFeed, setProductFeed] = React.useState(null);
  const [updateProducts, setUpdateProducts] = useState(false);
  //get all items
  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setProductFeed(data);
      });
  }, [updateProducts]);

  return (
    <ProductContext.Provider
      value={{
        productFeed,
        setProductFeed,
        updateProducts,
        setUpdateProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
