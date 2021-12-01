import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Item from "./Item";
// import { CircularProgress } from "@material-ui/core";

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
      <Wrapper>
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
        {productFeed &&
          productFeed.data
            .slice(0, numItems ? numItems : productFeed.data.length)
            .map((item) => {
              const product = item;
              console.log(product, "boop");
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
  background-color: #3f612d;
  border-radius: 20px;
  padding: 15px;
  width: 150px;
  font: var(--font-body);
  &:hover {
    cursor: pointer;
  }
`;
// const ItemCont = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   border: 2px solid black;
// `;

const Wrapper = styled.div`
  background-color: #e0edc5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const ButtonHolder = styled.div`
  position: relative;
  width: 200px;
  height: auto;
  margin: 0 auto;
`;
