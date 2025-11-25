import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const LeftMenu = ({ mode }) => {
  const items = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "sso",
      label: <Link to="/Ssoid">SSO ID</Link>,
    },
    {
      key: "admitcard",
      label: <Link to="/admit-card">Admit Card</Link>,
    },
    {
      key: "result",
      label: <Link to="/results">Results</Link>,
    },
    {
      key: "faq",
      label: <Link to="/faq">FAQ</Link>,
    },
  ];

  return (
    <Menu
      mode={mode}
      items={items}
      overflowedIndicator={null}
      disabledOverflow={true}
      style={{
        border: "none",
        fontSize: "16px",
      }}
    />
  );
};

export default LeftMenu;
