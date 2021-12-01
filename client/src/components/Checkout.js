import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

import styled from "styled-components";

const Checkout = () => {
  const { shoppingCart, totalPrice } = useContext(CartContext);
  console.log(shoppingCart);
  return (
    <Wrapper>
      <OrderSummary>
        {shoppingCart.map((item) => {
          return (
            <ItemWrapper>
              <ItemSummary>
                <Quantity>{item.quantity}x</Quantity>
                <ItemName>{item.name}</ItemName>
              </ItemSummary>
              <ItemDetails>
                <Company>Sold by: {item.company}</Company>
                <ItemPrice>{item.price}</ItemPrice>
              </ItemDetails>
            </ItemWrapper>
          );
        })}
        <Total>${totalPrice.toFixed(2)}</Total>
      </OrderSummary>
      <form>
        <FormWrapper>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="e-mail" />
          <input placeholder="Phone Number" />
          <input placeholder="Street Address" />
          <input placeholder="City" />
          <input placeholder="Province" />
          <input placeholder="Postal Code" />
          <input placeholder="Country" />
          <input placeholder="credit card" />
          <input placeholder="CVC" />
          <Confirmation disabled={true}>Confirm</Confirmation>
        </FormWrapper>
      </form>
    </Wrapper>
  );
};

const OrderSummary = styled.div`
  max-width: 500px;
  min-width: 400px;
`;

const Wrapper = styled.div``;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 25px;
  max-width: 500px;
  min-width: 400px;
`;

const ItemSummary = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Quantity = styled.div`
  font-weight: bold;
  margin-right: 8px;
`;

const ItemName = styled.div``;

const Company = styled.div``;

const ItemPrice = styled.div`
  font-weight: bold;
`;

const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  font-size: 25px;
  font-weight: bold;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 4px solid #000;
  border-radius: 6px;
  padding: 25px;
`;

const Confirmation = styled.button`
  margin: 10px 0px 0px 0px;
  width: 100%;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export default Checkout;
