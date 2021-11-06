import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/useSlice";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feedbar/Feed";
import Login from "./Login/Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}
export default App;
