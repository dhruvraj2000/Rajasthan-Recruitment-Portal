import React from "react";
import { Breadcrumb } from "antd";

const PagePartition = ({ items = [] }) => {
  const breadcrumbItems = items.map((item) => ({
    title: item.to ? (
      <a href={item.to} style={{ color: "black" }}>
        {item.title}
      </a>
    ) : (
      item.title
    )
  }));

  return <Breadcrumb separator=" > " items={breadcrumbItems} />;
};

export default PagePartition;
