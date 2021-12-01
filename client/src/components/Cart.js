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
      <div>Shopping cart</div>
      {shoppingCart.length === 0 ? (
        <div> There doesn't seem to be anything here </div>
      ) : (
        <>
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
              <div>$ {totalPrice.toFixed(2)}</div>
            </Checkout>
            <StyledLink to="/checkout">
              <CheckoutButton>checkout</CheckoutButton>
            </StyledLink>
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

const CategoryName = styled.div`
  font-family: "Raleway";
  font-size: 15px;
  margin-bottom: 0;
`;

const BrandName = styled.div`
  font-family: "Raleway";
  font-size: 15px;
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
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default Cart;
