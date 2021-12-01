import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);
  const [items, setItems] = useState(null);

  // fetching items for the cart page
  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
      });
  }, []);

  // returning a new array of just the items we need based on shoppingCart context
  // at the same time we are adding in the quantity to the cart

  let cartArray = shoppingCart?.map((cartItem) => {
    let item = items?.find((item) => {
      return item._id === cartItem._id;
    });
    return { ...item, quantity: cartItem.quantity };
  });

  // calcultatin total price and total quantities
  let totalPrice = 0;
  let totalQuantity = 0;
  cartArray.forEach((item) => {
    totalPrice += Number(item.price?.replace("$", "")) * Number(item.quantity);
    totalQuantity += item.quantity;
  });

  return (
    <Wrapper>
      <div>Shopping cart</div>
      {cartArray.length === 0 ? (
        <div> There doesn't seem to be anything here </div>
      ) : (
        <>
          <CartWrapper>
            {cartArray.map((item) => {
              return (
                <ProductDetails>
                  <ItemImage alt={item.name} src={item.imageSrc} />
                  <ItemDetails>
                    <ItemName>{item.name}</ItemName>
                    <Price>{item.price}</Price>
                    <div>Quantity: {item.quantity}</div>
                  </ItemDetails>
                </ProductDetails>
              );
            })}
          </CartWrapper>
          <CheckoutWrapper>
            <Checkout>
              <div>
                Sub-total{" "}
                {totalQuantity === 1 ? "(1 item)" : `(${totalQuantity} items)`}{" "}
              </div>
              <div>$ {totalPrice}</div>
            </Checkout>
            <CheckoutButton>checkout</CheckoutButton>
          </CheckoutWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const CartWrapper = styled.div``;

const ProductDetails = styled.div`
  display: flex;
  margin: 50px 50px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  max-height: 100px;

  margin-right: 50px;
`;

const ItemName = styled.p`
  font-family: "Raleway";
  font-size: 25px;
  margin-bottom: 0;
`;

const Price = styled.div`
  font-family: "Raleway";
  font-size: 35px;
`;
const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  border: 1px solid black;
  margin: 0px 50px;
  padding: 20px;
`;
const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Raleway";
  font-size: 35px;
  margin: 0px 25px;
`;

const CheckoutButton = styled.button`
  width: 150px;
  border: none;
  border-radius: 30px;
`;
export default Cart;
