import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Language from "../data/Language";

const LeftMenu = ({ mode, currentLang  }) => {
  const items = [
    {
      key: "home",
      label: <Link to="/">{Language[currentLang].home}</Link>,
    },
    {
      key: "sso",
      label: <Link to="/Ssoid">{Language[currentLang].ssoid}</Link>,
    },
    {
      key: "admitcard",
      label: <Link to="/Admitcard">{Language[currentLang].admitcard}</Link>,
    },
    {
      key: "result",
      label: <Link to="/results">{Language[currentLang].result}</Link>,
    },
    {
      key: "faq",
      label: <Link to="/faq">{Language[currentLang].faqs}</Link>,
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
