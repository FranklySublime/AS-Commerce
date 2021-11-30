import React, { useEffect, useState } from "react";

import styled from "styled-components";

const Cart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => console.log("sup", data.data));
  }, []);

  return (
    <Wrapper>
      <h2>Shopping cart</h2>
      {shoppingCart.length === 0 ? (
        <div> There doesn't seem to be anything here </div>
      ) : (
        shoppingCart.map((item) => {
          return <div> {item.name}</div>;
        })
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Cart;
