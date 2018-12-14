import React, { Component } from "react";
import "./App.css";
import Drawer from "./components/Base/Container/Drawer";

const App = () => (
  <div className="app">
    <Main />
  </div>
);

const Main = () => (
  <div>
    <Drawer />
  </div>
);

export default App;
