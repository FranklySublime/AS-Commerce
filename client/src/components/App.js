// import React feature here
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import our components here
// import Header from "./Header";
// import Footer from "./Footer";
// and more to come to an App.js near you

// import out styling stuff here
// import styled from "styled-components";
// import GlobalStyles from "./GlobalStyles";

// main application component
const App = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyles /> */}
      {/* <Header /> */}
      {/* <SideBar /> */}
      {/* <Main> */}
      <Routes>
        <Route exact path="/">
          {/* Homepage component will have to go here. */}
        </Route>
        <Route path="/product/:categoryId/:sellerId/:productId">
          {/* Product page component will have to go here. */}
        </Route>
        <Route path="/category/:categoryId">
          {/* Category component will have to go here. */}
        </Route>
        <Route path="/store/:sellerId">
          {/* Seller component will have to go here. i.e products from this seller */}
        </Route>
        <Route path="/cart">{/* Cart component will have to go here. */}</Route>
        <Route path="/checkout">
          {/* Checkout component will have to go here. */}
        </Route>
        <Route path="/confirmation">
          {/* Confirmation component will have to go here. */}
        </Route>
      </Routes>
      {/* <Footer /> */}
      {/* </Main> */}
    </BrowserRouter>
  );
};

export default App;
