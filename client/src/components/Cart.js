import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const Cart = () => {
  const {
    shoppingCart,
    setShoppingCart,
    totalPrice,
    totalQuantity,
    handleCartDb,
    handleRemoveCartDb,
    handleToOrder,
  } = useContext(CartContext);
  const { updateProducts, setUpdateProducts } = useContext(ProductContext);

  // adding inventory from cart functionality
  const handleIncrement = (object) => {
    let newCart = shoppingCart.map((item) => {
      if (item._id === object._id) {
        let obj = {
          _id: object._id,
          quantity: object.quantity + 1,
          price: object.price,
        };
        handleCartDb(obj);
        return { ...object, quantity: object.quantity + 1 };
      } else {
        return item;
      }
    });
    setShoppingCart(newCart);
    sessionStorage.setItem("shoppingCart", JSON.stringify(newCart));
  };

  // removing inventory from cart functionality
  const handleDecrement = (object) => {
    if (object.quantity === 1) {
      handleRemove(object);
    }
    let newCart = shoppingCart.map((item) => {
      if (item._id === object._id) {
        let obj = {
          _id: object._id,
          quantity: object.quantity - 1,
          price: object.price,
        };
        handleCartDb(obj);
        return { ...object, quantity: object.quantity - 1 };
      } else return item;
    });
    setShoppingCart(newCart);
    sessionStorage.setItem("shoppingCart", JSON.stringify(newCart));
  };

  // remove item from cart
  const handleRemove = (object) => {
    shoppingCart.splice(shoppingCart.indexOf(object), 1);
    handleRemoveCartDb(object._id);
    sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    setUpdateProducts(!updateProducts);
  };

  return (
    <Wrapper>
      <H1>Your Cart</H1>
      {shoppingCart.length === 0 ? (
        <div> There doesn't seem to be anything here </div>
      ) : (
        <>
          <BigWrapper>
            <CartWrapper>
              {shoppingCart.map((item) => {
                return (
                  <ProductDetails key={item._id}>
                    {item.quantity >= 1 && (
                      <>
                        <ItemImage alt={item.name} src={item.imageSrc} />
                        <ItemDetails>
                          <ItemName>{item.name}</ItemName>
                          <CategoryName>Category: {item.category}</CategoryName>
                          <BrandName>Sold by: {item.company}</BrandName>
                          <Price>{item.price}</Price>
                          <QuantityWrapper>
                            <Quantity>Quantity: {item.quantity}</Quantity>
                            <Button onClick={() => handleIncrement(item)}>
                              +
                            </Button>
                            <Button onClick={() => handleDecrement(item)}>
                              -
                            </Button>
                            <RemoveButton onClick={() => handleRemove(item)}>
                              Remove
                            </RemoveButton>
                          </QuantityWrapper>
                        </ItemDetails>
                      </>
                    )}
                  </ProductDetails>
                );
              })}
            </CartWrapper>
            <CheckoutWrapper>
              <Checkout>
                <div>
                  Sub-total{" "}
                  {totalQuantity === 1
                    ? "(1 item)"
                    : `(${totalQuantity} items)`}{" "}
                </div>
                <div>$ {totalPrice.toFixed(2)}</div>
              </Checkout>
              <StyledLink to="/checkout">
                <CheckoutButton>Checkout</CheckoutButton>
              </StyledLink>
            </CheckoutWrapper>
          </BigWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Button = styled.button`
  border: solid;
  background-color: transparent;
  color: #3f612d;
  border-color: #3f612d;
  border-width: thin;
  margin-right: 4px;
  width: 25px;
  border-radius: 50%;
`;

const RemoveButton = styled.button`
  border: solid;
  background-color: transparent;
  color: #3f612d;
  border-color: #3f612d;
  border-width: thin;
  margin-right: 4px;
  width: 75px;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  background-color: #f1f7ee;
`;
const BigWrapper = styled.div`
  margin-left: 25%;
  width: 750px;
`;
const H1 = styled.h1`
  margin-left: 50%;
  font-family: "Lato", sans-serif;
  color: #3f612d;
`;
const CartWrapper = styled.div``;

const ProductDetails = styled.div`
  display: flex;
  margin: 50px 50px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  height: 150px;
  max-width: 150px;
  border-radius: 30%30px;
  margin-right: 50px;
`;

const ItemName = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 25px;
  margin-bottom: 5px;
  margin-top: 0;
  color: #3f612d;
`;

const CategoryName = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  margin-bottom: 5px;
  color: #92aa83;
`;

const BrandName = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  margin-bottom: 5px;
  color: #92aa83;
`;
const Quantity = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  margin: 0px 10px 5px 0px;
  color: #92aa83;
`;
const QuantityWrapper = styled.div`
  display: flex;
`;

const Price = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 35px;
  color: #3f612d;
`;
const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  border: 1px solid #3f612d;
  border-radius: 10px;
  margin: 0px 50px;
  padding: 20px;
`;
const Checkout = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  margin: 0px 25px;
  align-self: center;
`;

const CheckoutButton = styled.button`
  width: 150px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  background-color: #3f612d;
  color: #f1f7ee;
  padding: 15px 20px 15px 20px;
  &:hover {
    background-color: #f1f7ee;
    color: #3f612d;
    border: solid;
    border-color: #3f612d;
    border-width: medium;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default Cart;
