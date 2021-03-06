import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Confirmation = () => {
  const [confirmation, setConfirmation] = useState(null);

  const [totalPrice, setTotalPrice] = useState(0);

  const orderTotal = (array) => {
    let total = 0;
    array.forEach((item) => {
      total +=
        Number(parseFloat(item.price.replace("$", "")).toFixed(2)) * item.qty;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    fetch("/order")
      .then((res) => res.json())
      .then((data) => {
        setConfirmation(data.data);
        orderTotal(data.data);
      });
  }, []);

  return (
    <>
      <Div>
        <AnotherDiv>
          <H2>Congrats! Your order is confirmed.</H2>
          <Order>Order Details: </Order>
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
        </AnotherDiv>
      </Div>
    </>
  );
};

export default Confirmation;

const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;
const AnotherDiv = styled.div`
  margin-left: 25%;
`;
const H2 = styled.h2`
  font-family: "Lato", sans-serif;
  color: #3f612d;
`;
const Div = styled.div`
  background-color: #f1f7ee;
  height: 100vh;
`;
const Order = styled.p`
  font-family: "Lato", sans-serif;
  color: #3f612d;
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
