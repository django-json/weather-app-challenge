import React from "react";

import "./App.css";

import SideBar from "./components/sidebar/sidebar.component";
import Main from "./components/main/main.component";

function App() {
  return (
    <div className="weather-app">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
