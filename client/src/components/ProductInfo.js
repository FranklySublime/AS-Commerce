import React from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const [productDetails, setProductDetails] = React.useState(null);
  const [companyInfo, setCompanyInfo] = React.useState(null);
  const [individualCompany, setIndividualCompany] = React.useState(null);
  const { _id } = useParams();

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
                <ItemButton>
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
const Brand = styled.p`
  font-family: "Raleway";
  font-style: italic;
  font-size: 15px;
  color: #fac898;
  font-weight: bold;
`;
const Website = styled.a`
  font-family: "Raleway";
  font-style: italic;
  font-size: 15px;
  color: #fac898;
  font-weight: bold;
`;
const Country = styled.p`
  font-family: "Raleway";
  font-style: italic;
  font-size: 15px;
  color: #fac898;
  font-weight: bold;
`;
