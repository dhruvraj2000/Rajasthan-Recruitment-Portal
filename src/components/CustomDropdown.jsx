import React from "react";


import { Select } from 'antd';


const CustomDropdown = ({ defaultValue, onchange, options }) => {
  return (
    <Select

      style={{height:'40px'}}
      defaultValue={ defaultValue }
      placeholder="Select an option"
      onChange={onchange}
      options={options}
    />
  );
};

export default CustomDropdown;
