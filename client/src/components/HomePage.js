import React, { useContext, useState } from "react";
import styled from "styled-components";

import Item from "./Item";
import { ProductContext } from "../context/ProductContext";
import { CircularProgress } from "@material-ui/core";
// import { CircularProgress } from "@material-ui/core";

const HomePage = () => {
  const { productFeed } = useContext(ProductContext);
  const [numItems, setNumItems] = useState(20); // 20 items displayed initially

  // when the load more button is clicked 20 more items are displayed
  const handleClick = () => {
    setNumItems(numItems + 20);
  };

  return (
    <div>
      <Wrapper>
        {!productFeed ? (
          <CircDiv>
            <CircularProgress />
          </CircDiv>
        ) : (
          productFeed.data
            .slice(0, numItems ? numItems : productFeed.data.length)
            .map((item) => {
              const product = item;
              console.log(product, "boop");
              const name = product.name;
              const picture = product.imageSrc;
              const _id = product._id;
              const price = product.price;
              return (
                <Item _id={_id} name={name} picture={picture} price={price} />
              );
            })
        )}
      </Wrapper>
      <ButtonHolder>
        <LoadMore onClick={handleClick}>Load More</LoadMore>
      </ButtonHolder>
    </div>
  );
};

export default HomePage;

const LoadMore = styled.button`
  border: none;
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: "Lato", sans-serif;
  background-color: #3f612d;
  border-radius: 20px;
  padding: 15px;
  width: 150px;
  &:hover {
    background-color: #f1f7ee;
    color: #3f612d;
    border: solid;
    border-color: #3f612d;
    border-width: medium;
    cursor: pointer;
  }
`;
const CircDiv = styled.div``;

const Wrapper = styled.div`
  background-color: #f1f7ee;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const ButtonHolder = styled.div`
  position: relative;
  background-color: #f1f7ee;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
