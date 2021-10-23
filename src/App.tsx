import React from "react";

import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
