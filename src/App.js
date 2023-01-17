import React, { Component } from "react";
import { ContextProvider } from "./Utils/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage/WelcomePage";

export class App extends Component {
  render() {
    return (
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
          </Routes>
        </Router>
      </ContextProvider>
    );
  }
}

export default App;
