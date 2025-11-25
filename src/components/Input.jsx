import React from "react";
import { Input as AntInput } from "antd";

const defaultStyle = {
  height: "45px",
  width: "85%", 
};

const CustomInput = ({ prefix, placeholder, size = "large", className ,id }) => {
  return (
    <AntInput
      size={size}
      placeholder={placeholder}
      prefix={prefix}
      className={className}
      style={{ ...defaultStyle}}
      id={id}
    />
  );
};

export default CustomInput;
