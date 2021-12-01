import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const ProductInfo = () => {
  const [productDetails, setProductDetails] = useState(null);

  const [companyInfo, setCompanyInfo] = useState(null);
  const [individualCompany, setIndividualCompany] = useState(null);
  const { _id } = useParams();
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

  //get item based on _id
  useEffect(() => {
    fetch(`/items/${_id}`)
      .then((res) => res.json())
      .then((info) => {
        setProductDetails(info.data);
      });
  }, []);

  // get companies, after we get productDetails
  useEffect(() => {
    fetch("/companies")
      .then((res) => res.json())
      .then((company) => {
        setCompanyInfo(company.data);
      });
  }, [productDetails]);

  //set state variable to the company object, from companies collection in DB,
  //that corresponds to the companyId, do this after we get companies
  useEffect(() => {
    {
      companyInfo &&
        productDetails &&
        companyInfo.forEach((company) => {
          if (productDetails.companyId === company._id) {
            setIndividualCompany(company);
          }
        });
    }
  }, [companyInfo]);

  //adding the add to shopping cart function so that we can render a beautiful cart

  const handleCart = () => {
    let inCart = false;

    //check if item is in cart
    shoppingCart.forEach((item) => {
      if (productDetails._id === item._id) {
        inCart = true;
      }
    });

    // if item is in cart, map through the shopping cart to update the quantity (create a new array)
    //else, push it into the cart
    if (inCart) {
      let newCart = shoppingCart.map((item) => {
        if (productDetails._id === item._id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setShoppingCart(newCart);
      sessionStorage.setItem("shoppingCart", JSON.stringify(newCart));
      console.log(shoppingCart, "hello");
    } else {
      // setItemCount(itemCount + 1);
      setShoppingCart((customersCart) => {
        let customerCart = [...customersCart];
        customerCart.push({
          _id: productDetails._id,
          quantity: 1,
          name: productDetails.name,
          price: productDetails.price,
          category: productDetails.category,
          body_location: productDetails.body_location,
          imageSrc: productDetails.imageSrc,
          company: individualCompany.name,
        });
        sessionStorage.setItem("shoppingCart", JSON.stringify(customerCart));
        return customerCart;
      });
      console.log(shoppingCart, "hello");
    }
  };

  console.log(productDetails);

  //render item details page
  return (
    <>
      <PositionItems>
        {productDetails && (
          <>
            <ItemImage src={productDetails.imageSrc} />
            <div>
              <ItemName>{productDetails.name}</ItemName>
              {individualCompany && (
                <>
                  <Brand>{individualCompany.name}</Brand>
                  <Website href={individualCompany.url}>
                    {individualCompany.url}
                  </Website>
                  <Country>Made in: {individualCompany.country}</Country>
                </>
              )}
              <Category>{productDetails.category}</Category>
              {productDetails.numInStock !== 0 ? (
                <ItemButton onClick={() => handleCart()}>
                  {productDetails.price} -- <strong>Buy Now!</strong>
                </ItemButton>
              ) : (
                <p>Out of Stock</p>
              )}
            </div>
          </>
        )}
      </PositionItems>
    </>
  );
};

export default ProductInfo;

const ItemImage = styled.img`
  height: 300px;
  border-radius: 30%30px;
  margin: 20px;
  margin-left: 100px;
  margin-top: 100px;
  margin-right: 50px;
`;
const ItemButton = styled.button`
  background-color: #3f612d;
  color: #f1f7ee;
  border: none;
  font-family: "Lato", sans-serif;
  border-radius: 5px;
  padding: 15px 20px 15px 20px;
  &:hover {
    background-color: #f1f7ee;
    color: #3f612d;
    border: solid;
    border-color: #3f612d;
    border-width: medium;
  }
`;
const PositionItems = styled.div`
  display: flex;
  background-color: #f1f7ee;
`;
const ItemName = styled.p`
  font-family: "Lato", sans-serif;
  font-style: none;
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 120px;
  color: #3f612d;
`;

const Category = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  color: #92aa83;
  font-weight: bold;
`;
const Brand = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  color: #92aa83;
  font-weight: bold;
`;
const Website = styled.a`
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-size: 15px;
  color: #92aa83;
  font-weight: bold;
`;
const Country = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  color: #92aa83;
  font-weight: bold;
`;
