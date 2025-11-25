import React, { useState } from "react";
import LeftMenu from "./LeftMenu";

import { Drawer, Button } from "antd";
import { AlignRightOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="menu">
      <div className="menu__container header-inner header-inner-menu  p-0">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>

        {/* Mobile Button */}
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <AlignRightOutlined />
        </Button>

        {/* Drawer */}
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          onClose={onClose}
          open={open} // NEW AntD uses "open" instead of "visible"
        >
          <LeftMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
