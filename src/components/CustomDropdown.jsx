import React from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const CustomDropdown = ({ items, value, onSelect, placeholder }) => {
  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        items,
        onClick: ({ key }) => onSelect(key),
      }}
    >
      <div className="custom-dropdown-box">
        <Space style={{ fontSize: 15 }}>
          {value || placeholder}
        </Space>
        <DownOutlined />
      </div>
    </Dropdown>
  );
};

export default CustomDropdown;
