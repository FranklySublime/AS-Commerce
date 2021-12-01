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
import createGlobalStyle from "./GlobalStyles";

// main application component
const App = () => {
  return (
    <BrowserRouter>
      <createGlobalStyle />
      <Header />
      <Routes>
        <Route path="/product/:_id" element={<ProductInfo />} />
        <Route path="/category/:_id" element={<Category />} />
        <Route path="/store/:_id" element={<SellerInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
