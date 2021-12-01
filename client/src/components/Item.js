import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Item = ({ name, category, picture, _id }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${_id}`);
  };

  //render each item
  return (
    <SmallerBox onClick={handleClick}>
      <Image src={picture} alt="gadget" />
      <Div>
        <Title>{name}</Title>
        <Category>{category}</Category>
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
  max-height: 150px;
  min-width: 150px;
  border-radius: 10px;
`;

const SmallerBox = styled.div`
  margin: 30px;
  border-radius: 10px;
  background-color: #3f612d;
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  color: white;
  max-width: 350px;
  height: 275px;
  &:hover {
    border: solid;
    border-radius: 10px;
    border-color: #3f612d;
    border-width: 1px;
    box-shadow: 10px 10px 10px 0px #3f612d;
  }
`;

const Div = styled.div`
  margin-left: 20px;
`;

const Category = styled.p``;
