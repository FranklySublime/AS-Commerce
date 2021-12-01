import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";
import FitMan from "./FitMan.png";
import Slogan from "./Slogan.png";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const { shoppingCart, totalQuantity } = React.useContext(CartContext);
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <Wrapper>
        <StyledLink to="/">
          <StyleSlogan src={Slogan} />
        </StyledLink>
        <div>
          <StyledLink to="/">
            <LogoStyled src={Logo} />
          </StyledLink>
        </div>
        <StyledLink to="/cart">
          <Cart>
            <Quantity>{totalQuantity}</Quantity>
            <ShoppingCart size="0.2x" />
          </Cart>
        </StyledLink>
      </Wrapper>
      <OtherWrapper>
        <ManImg src={FitMan} />
      </OtherWrapper>
    </IconContext.Provider>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #b0bea9;
  max-height: 150px;
  color: #ffff;
`;

const ShoppingCart = styled(FiShoppingCart)`
  color: #3f612d;
`;

const Quantity = styled.p`
  font-family: "Lato", sans-serif;
  color: #3f612d;
  position: relative;
  left: 50px;
  bottom: 4px;
`;

const StyleSlogan = styled.img`
  max-width: 250px;
  max-height: 250px;
  margin-top: 40px;
`;

const Cart = styled.div`
  margin: 0px 30px 0px 0px;
  height: 50px;
  width: 90px;
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const LogoStyled = styled.img`
  margin-right: 200px;
  size: 100%;
`;

const OtherWrapper = styled.div`
  overflow: hidden;
  max-height: 50px;
  &:hover {
    transform: scale(1.5);
    max-height: 100%;
    max-width: 80%;
  }
`;

const ManImg = styled.img`
  opacity: 0.7;
  position: relative;
  top: -2px;
  width: 100%;
  display: flex;
`;
export default Header;
