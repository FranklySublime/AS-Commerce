import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { shoppingCart, setShoppingCart, totalPrice, totalQuantity } =
    useContext(CartContext);

  // calcultating total price and total quantities

  return (
    <Wrapper>
      <H1>Your Cart</H1>
      {shoppingCart.length === 0 ? (
        <div> There doesn't seem to be anything here </div>
      ) : (
        <>
          <BigWrapper>
            <CartWrapper>
              {shoppingCart.map((item) => {
                return (
                  <ProductDetails key={item._id}>
                    <ItemImage alt={item.name} src={item.imageSrc} />
                    <ItemDetails>
                      <ItemName>{item.name}</ItemName>
                      <CategoryName>Category: {item.category}</CategoryName>
                      <BrandName>Sold by: {item.company}</BrandName>
                      <Price>{item.price}</Price>
                      <Quantity>Quantity: {item.quantity}</Quantity>
                    </ItemDetails>
                  </ProductDetails>
                );
              })}
            </CartWrapper>
            <CheckoutWrapper>
              <Checkout>
                <div>
                  Sub-total{" "}
                  {totalQuantity === 1
                    ? "(1 item)"
                    : `(${totalQuantity} items)`}{" "}
                </div>
                <div>$ {totalPrice.toFixed(2)}</div>
              </Checkout>
              <StyledLink to="/checkout">
                <CheckoutButton>Checkout</CheckoutButton>
              </StyledLink>
            </CheckoutWrapper>
          </BigWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f1f7ee;
`;
const BigWrapper = styled.div`
  margin-left: 25%;
  width: 750px;
`;
const H1 = styled.h1`
  margin-left: 50%;
  font-family: "Lato", sans-serif;
  color: #3f612d;
`;
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
  height: 150px;
  border-radius: 30%30px;
  margin-right: 50px;
`;

const ItemName = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 25px;
  margin-bottom: 5px;
`;

const CategoryName = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  margin-bottom: 5px;
`;

const BrandName = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  margin-bottom: 5px;
`;
const Quantity = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  margin-bottom: 5px;
`;

const Price = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 35px;
`;
const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  border: 1px solid #3f612d;
  border-radius: 10px;
  margin: 0px 50px;
  padding: 20px;
`;
const Checkout = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  margin: 0px 25px;
  align-self: center;
`;

const CheckoutButton = styled.button`
  width: 150px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  background-color: #3f612d;
  color: #f1f7ee;
  padding: 15px 20px 15px 20px;
  &:hover {
    background-color: #f1f7ee;
    color: #3f612d;
    border: solid;
    border-color: #3f612d;
    border-width: medium;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default Cart;
