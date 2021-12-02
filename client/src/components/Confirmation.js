import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const Confirmation = () => {
  const [confirmation, setConfirmation] = useState(null);

  const [totalPrice, setTotalPrice] = useState(0);

  const orderTotal = (array) => {
    console.log("BRUH");
    console.log(confirmation);

    return array.forEach((item) => {
      setTotalPrice(
        Number(totalPrice) +
          Number(parseFloat(item.price.replace("$", "")).toFixed(2)) * item.qty
      );
    });
  };

  console.log(totalPrice);

  useEffect(() => {
    fetch("/order")
      .then((res) => res.json())
      .then((data) => {
        setConfirmation(data.data);
        orderTotal(data.data);

        console.log("but why???");
      });
  }, []);

  console.log(confirmation);

  return (
    <>
      <div>
        <h2>Congrats! Your order is confirmed.</h2>
        <p>Order Details: </p>
        {confirmation?.map((item) => {
          return (
            <ItemWrapper>
              <ItemSummary>
                <Quantity>{item.qty}x</Quantity>
                <ItemName>{item.name}</ItemName>
              </ItemSummary>
              <ItemDetails>
                {/* <Company>Sold by: {item.company}</Company> */}
                <ItemPrice>{item.price}</ItemPrice>
              </ItemDetails>
            </ItemWrapper>
          );
        })}
        <TotalDiv>
          <TotalText>Total</TotalText>
          <Total>$ {totalPrice}</Total>
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
