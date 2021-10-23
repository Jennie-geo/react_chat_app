import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import image from "../img/image2.jpeg";

const Sidebar = () => {
  const recentItem = (topic: string) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={image} alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Dilichi Isintume</h2>
        <h4>isintumejenny@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed you</p>
          <p className="sidebar_statNumber">2,345</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">1,234</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
