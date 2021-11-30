import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <Wrapper>
        <div>
          <StyledLink to="/">
            <Logo>Logo Placeholder</Logo>
          </StyledLink>
        </div>
        <StyledLink to="/cart">
          <Cart>
            <FiShoppingCart />
          </Cart>
        </StyledLink>
      </Wrapper>
    </IconContext.Provider>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #3f612d;
  color: #ffff;
`;

// will be switched to a styled img once we have a ✨ logo ✨
const Logo = styled.h1`
  margin: 10px 25px;
`;

const Cart = styled.div`
  margin: 0px 35px 0px 0px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default Header;
