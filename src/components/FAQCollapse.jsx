import React from "react";
import { Collapse } from "antd";

const FAQCollapse = ({ data = [], language = "en", searchTerm = "" }) => {
  const filtered = data.filter(({ q, a }) => {
    const Q = q[language]?.toLowerCase() || "";
    const A = typeof a[language] === "string" ? a[language].toLowerCase() : "";
    return Q.includes(searchTerm) || A.includes(searchTerm);
  });

  return (
    <Collapse
      accordion
      expandIconPosition="end"
      items={filtered.map((item, i) => ({
        key: i + 1,
        label: <b>{item.q[language]}</b>,
        children: <div>{item.a[language]}</div>,
      }))}
    />
  );
};

export default FAQCollapse;
