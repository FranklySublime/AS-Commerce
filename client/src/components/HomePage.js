import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Item from "./Item";

const HomePage = () => {
  const [productFeed, setProductFeed] = React.useState(null);
  const [numItems, setNumItems] = React.useState(20); // 20 items displayed initially

  //get all items
  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setProductFeed(data);
      });
  }, []);

  // when the load more button is clicked 20 more items are displayed
  const handleClick = () => {
    setNumItems(numItems + 20);
  };

  return (
    <div>
      {productFeed &&
        productFeed.data
          .slice(0, numItems ? numItems : productFeed.data.length)
          .map((item) => {
            const product = item;
            const name = product.name;
            const picture = product.imageSrc;
            const category = product.category;
            const _id = product._id;
            return (
              <Item
                _id={_id}
                name={name}
                category={category}
                picture={picture}
              />
            );
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
