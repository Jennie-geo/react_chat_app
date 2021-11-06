import React from "react";
import "./InputOptions.css";
import { FunctionComponent } from "react";

interface PropsItem {
  Icon: any;
  title: string;
  color: string;
}
const InputOptions: FunctionComponent<PropsItem> = ({ Icon, title, color }) => {
  return (
    <div className="inputoption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOptions;
