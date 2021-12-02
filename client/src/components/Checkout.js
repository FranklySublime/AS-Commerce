import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

import styled from "styled-components";

const Checkout = () => {
  const { shoppingCart, totalPrice, handleToOrder } = useContext(CartContext);

  return (
    <Wrapper>
      <Div>
        <OrderSummary>
          <H2>Please review your items and confirm your purchase.</H2>
          <AnotherDiv>
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
            <TotalDiv>
              <TotalText>Total</TotalText>
              <Total>${totalPrice.toFixed(2)}</Total>
            </TotalDiv>
          </AnotherDiv>
        </OrderSummary>
        <FormWrapper>
          <form type="submit" onSubmit={(e) => handleToOrder(e)}>
            <Input placeholder="First Name" required />
            <Input placeholder="Last Name" required />
            <Input placeholder="e-mail" type="email" required />
            <Input placeholder="Phone Number" required />
            <Input placeholder="Street Address" required />
            <Input placeholder="City" required />
            <Input placeholder="Province" required />
            <Input placeholder="Postal Code" required />
            <Input placeholder="Country" required />
            <Input placeholder="credit card" required />
            <Input placeholder="CVC" required />
            <Confirmation>Confirm</Confirmation>
          </form>
        </FormWrapper>
      </Div>
    </Wrapper>
  );
};

const OrderSummary = styled.div`
  width: 600px;
  min-width: 400px;
  margin-left: 10%;
  margin-top: 10px;
`;
const Div = styled.div`
  display: flex;
`;
const AnotherDiv = styled.div`
  margin-top: 30px;
`;

const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;
const TotalText = styled.p`
  font-family: "Lato", sans-serif;
  color: #3f612d;
  margin-left: 20px;
  font-size: 25px;
`;

const Wrapper = styled.div`
  background-color: #f1f7ee;
  height: 100vh;
`;

const H2 = styled.h2`
  font-family: "Lato", sans-serif;
  color: #3f612d;
  margin-left: 30%;
  margin-top: 30px;
  width: 700px;
`;

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
  font-family: "Lato", sans-serif;
  color: #92aa83;
`;

const ItemName = styled.div`
  font-family: "Lato", sans-serif;
  color: #92aa83;
`;

const Company = styled.div`
  font-family: "Lato", sans-serif;
  color: #92aa83;
`;

const ItemPrice = styled.div`
  font-weight: bold;
  font-family: "Lato", sans-serif;
  color: #3f612d;
`;

const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  font-size: 25px;
  font-weight: bold;
  font-family: "Lato", sans-serif;
  color: #3f612d;
  margin-right: 70px;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 4px solid #3f612d;
  border-radius: 6px;
  padding: 20px;
  width: 15%;
  margin-top: 100px;
`;

const Input = styled.input`
  margin: 3px;
`;

const Confirmation = styled.button`
  width: 158px;
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

export default Checkout;
