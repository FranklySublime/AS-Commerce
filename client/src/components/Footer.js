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
  background-color: #92aa83;
`;

const H1 = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: medium;
`;

const H2 = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
`;

export default Footer;
