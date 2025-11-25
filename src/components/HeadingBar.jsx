import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const HeadingBar = ({ title }) => {
  return (
    <div className="menu"
      style={{
        backgroundColor: "#3f51b5",
        color: "white",
        padding: "21px 20px",
        marginBottom: "20px",
      }}
    >
      <Title
        level={3}
        style={{
          margin: 0,
          color: "white",
          fontWeight: "700",
        }}
      >
        {title}
      </Title>
    </div>
  );
};

export default HeadingBar;
