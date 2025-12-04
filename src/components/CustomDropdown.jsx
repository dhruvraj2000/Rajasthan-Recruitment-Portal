import React from "react";
import Language from "../data/Language";
import { Select } from 'antd';

const CustomDropdown = ({ defaultValue, onchange, options, currentLang }) => {
  return (
    <Select
      style={{ height: '40px' }}
      defaultValue={defaultValue}
      placeholder={Language[currentLang].dropdownPlaceholder}
      onChange={onchange}
      options={options}
    />
  );
};

export default CustomDropdown;
