import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Item = ({ name, price, picture, _id }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${_id}`);
  };

  //render each item
  return (
    <SmallerBox onClick={handleClick}>
      <PriceTag>{price}</PriceTag>
      <Image src={picture} alt="gadget" />
      <Div>
        <Title>{name}</Title>
      </Div>
    </SmallerBox>
  );
};

export default Item;
const Title = styled.h2`
  margin-bottom: 100px;
  min-height: 64px;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`;

const PriceTag = styled.p`
  border: 3px solid #3f612d;
  max-width: 70px;
  color: #3f612d;
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-left: 290px;
  margin-top: -2px;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 5px #39ff14;
  }
`;

const SmallerBox = styled.div`
  margin: 30px;
  border-radius: 10px;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  text-align: center;
  color: #3f612d;
  max-width: 350px;
  height: 350px;
  &:hover {
    border: solid;
    transform: scale(1.05);
    border-radius: 10px;
    border-color: #3f612d;
    border-width: 2px;
    box-shadow: 5px 5px 5px 0px #3f612d;
  }
`;

const Div = styled.div`
  margin-left: 20px;
`;
