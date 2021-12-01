import React from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const Confirmation = () => {
  const { shoppingCart, totalPrice } = React.useContext(CartContext);
  return (
    <>
      <div>
        <h2>Congrats! Your order is confirmed.</h2>
        <p>Order Details: </p>
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
      </div>
    </>
  );
};

export default Confirmation;

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
