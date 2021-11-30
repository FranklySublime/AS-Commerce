import React from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const [productDetails, setProductDetails] = React.useState(null);
  const { _id } = useParams();

  //get item based on _id
  useEffect(() => {
    fetch(`/items/${_id}`)
      .then((res) => res.json())
      .then((info) => {
        setProductDetails(info.data);
      });
  }, []);

  console.log(productDetails, "bee");

  //render item details page
  return (
    <>
      {productDetails && (
        <PositionItems>
          <ItemImage src={productDetails.imageSrc} />
          <div>
            <ItemName>{productDetails.name}</ItemName>
            <Category>{productDetails.category}</Category>
            {productDetails.numInStock !== 0 ? (
              <ItemButton>
                ${productDetails.price} -- <strong>Buy Now!</strong>
              </ItemButton>
            ) : (
              <p>Out of Stock</p>
            )}
          </div>
        </PositionItems>
      )}
    </>
  );
};

export default ProductInfo;
const ItemImage = styled.img`
  max-height: 500px;
  border-radius: 30%30px;
  margin: 20px;
  margin-left: 100px;
  margin-top: 100px;
  margin-right: 50px;
`;
const ItemButton = styled.button`
  background-color: #fac898;
  font-family: "Raleway";
  border-radius: 5px;
  padding: 15px 20px 15px 20px;
`;
const PositionItems = styled.div`
  display: flex;
`;
const ItemName = styled.p`
  font-family: "Raleway";
  font-size: 40px;
  margin-bottom: 0;
  margin-top: 120px;
`;
const Category = styled.p`
  font-family: "Raleway";
  font-style: italic;
  font-size: 15px;
  color: #fac898;
  font-weight: bold;
`;
const ItemDescription = styled.p`
  font-family: "Raleway";
  font-size: 20px;
`;
