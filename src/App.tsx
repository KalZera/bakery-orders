import React from "react";

import { Routes } from "Routes";

import { Header } from "Templates";

import { GlobalStyle } from "./GlobalStyled";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
