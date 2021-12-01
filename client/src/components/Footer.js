import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <H1>Terms and Conditions:</H1>
      <H2>Please dont sue us! Thanks xoxo</H2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #b0bea9;
  height: 100px;
`;

const H1 = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: medium;
  color: #3f612d;
  text-align: center;
`;

const H2 = styled.h2`
  font-family: "Lato", sans-serif;
  font-size: small;
  color: #3f612d;
  text-align: center;
`;

export default Footer;
