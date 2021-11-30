import React from "react";
import styled from "styled-components";

const Item = ({ name, category, picture }) => {
  return (
    <SmallerBox>
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
  /* width: 100%; */
  max-height: 150px;
`;

const SmallerBox = styled.div`
  display: inline-block;
  margin: 30px;
  background-color: white;
  width: 500px;
  height: 375px;
  &:hover {
    border: solid;
    border-color: black;
    border-width: 0.5px;
  }
`;

const Div = styled.div`
  margin-left: 20px;
`;

const Category = styled.p``;
