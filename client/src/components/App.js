// import React feature here
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import our components here
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import ProductInfo from "./ProductInfo";
import Category from "./Category";
import SellerInfo from "./SellerInfo";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";

// import out styling stuff here
import styled from "styled-components";
// import GlobalStyles from "./GlobalStyles";

// main application component
const App = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyles /> */}
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/product/:categoryId/:sellerId/:productId"
          element={<ProductInfo />}
        />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/store/:sellerId" element={<SellerInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
