import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Item from "./Item";

const HomePage = () => {
  const [productFeed, setProductFeed] = React.useState(null);
  const [numItems, setNumItems] = React.useState(20);
  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setProductFeed(data);
      });
  }, []);

  const handleClick = () => {
    setNumItems(numItems + 20);
  };
  console.log(productFeed, "hello");
  return (
    <div>
      {productFeed &&
        productFeed.data
          .slice(0, numItems ? numItems : productFeed.data.length)
          .map((item) => {
            const product = item;
            console.log(product, "boop");
            const name = product.name;
            const picture = product.imageSrc;
            const category = product.category;
            return <Item name={name} category={category} picture={picture} />;
          })}
      <ButtonHolder>
        <LoadMore onClick={handleClick}>Load More</LoadMore>
      </ButtonHolder>
    </div>
  );
};

export default HomePage;

const LoadMore = styled.button`
  border: none;
  color: #f7dfc2;
  background-color: black;
  border-radius: 20px;
  padding: 15px;
  width: 150px;
  font-family: "Playfair Display", serif;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonHolder = styled.div`
  position: relative;
  width: 200px;
  height: auto;
  margin: 0 auto;
`;
