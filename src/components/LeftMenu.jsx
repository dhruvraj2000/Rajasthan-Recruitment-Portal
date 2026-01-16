import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import Language from "../data/Language";

const LeftMenu = ({ mode, currentLang = "en" }) => {
  const lang = Language[currentLang] || Language.en;
  const location = useLocation();


  const pathKeyMap = {
    "/": "home",
    "/Ssoid": "sso",
    "/Admitcard": "admitcard",
    "/results": "result",
    "/faq": "faq",
  };

  const selectedKey = pathKeyMap[location.pathname];

  const items = [
    { key: "home", label: <Link to="/">{lang.home}</Link> },
    { key: "sso", label: <Link to="/Ssoid">{lang.ssoid}</Link> },
    { key: "admitcard", label: <Link to="/Admitcard">{lang.admitcard}</Link> },
    { key: "result", label: <Link to="/results">{lang.result}</Link> },
    { key: "faq", label: <Link to="/faq">{lang.faqs}</Link> },
  ];

  return (
     <Menu
      mode={mode}
      items={items}
      selectedKeys={selectedKey ? [selectedKey] : []}
      overflowedIndicator={null}
      disabledOverflow
      style={{ border: "none", fontSize: "16px" }}
      itemRender={(item, dom) => (
        <span aria-describedby={undefined}>{dom}</span>
      )}
    />
  );
};

export default LeftMenu;
