import React, { Component } from "react";
import { ContextProvider } from "./Utils/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Navbar from "./Components/Navbar/Navbar";
import ListingPage from "./Components/ListingPage/ListingPage";
import DescriptionPage from "./Components/DescriptionPage/DescriptionPage";
import CartPage from "./Components/CartPage/CartPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

export class App extends Component {
  render() {
    return (
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route exact path="/404" element={ErrorPage} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/:category" element={<ListingPage />}></Route>
            <Route exact path="/:category/:id" element={<DescriptionPage />}></Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </ContextProvider>
    );
  }
}

export default App;
