import React from "react";
import { Card, Tabs } from "antd";
import { Bell } from "lucide-react";
const CustomTabs = ({ items }) => {
  return <Tabs defaultActiveKey="1" items={items} />;
};
export default CustomTabs;
