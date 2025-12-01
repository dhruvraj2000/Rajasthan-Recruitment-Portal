import React from "react";
import { Input as AntInput } from "antd";

const defaultStyle = {
  height: "40px",

};

const CustomInput = ({ prefix, placeholder, size = "large", className ,id,onChange,allowClear }) => {
  return (
    <AntInput
      size={size}
      placeholder={placeholder}
      prefix={prefix}
      className={className}
      style={ { ...defaultStyle } }
      onChange={ onChange }
      allowClear={allowClear}

      id={id}
    />
  );
};

export default CustomInput;
