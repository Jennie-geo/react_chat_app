import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "../HeaderOptions/HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption title="Home" Icon={HomeIcon} avatar={undefined} />
        <HeaderOption
          title="My Network"
          Icon={SupervisorAccountIcon}
          avatar={undefined}
        />
        <HeaderOption
          title="Jobs"
          Icon={BusinessCenterIcon}
          avatar={undefined}
        />
        <HeaderOption title="Messaging" Icon={ChatIcon} avatar={undefined} />
        <HeaderOption
          title="Notifications"
          Icon={NotificationsIcon}
          avatar={undefined}
        />
        <HeaderOption
          avatar="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          title="Me"
          Icon={undefined}
        />
      </div>
    </div>
  );
};

export default Header;
