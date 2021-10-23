import { Avatar } from "@material-ui/core";
import { FunctionComponent } from "react";
import "./HeaderOptions.css";

interface PropsTypes {
  Icon: any;
  title: string;
  avatar: any;
}
const HeaderOption: FunctionComponent<PropsTypes> = ({
  avatar,
  Icon,
  title,
}) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headeroption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <h3 className="headerOption_title"> {title}</h3>
    </div>
  );
};

export default HeaderOption;
