import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";

const formatNumber = (num) => {
  num = Number(String(num).replace(/,/g, "")); // remove commas

  if (num >= 100000) {
    return (num / 100000).toFixed(1) + "L"; // Lacs
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"; // Thousands
  }
  return num; // below 1000
};

const AnimatedStat = ({ title, value, icon }) => {
  const formattedValue = formatNumber(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="stat-card">
        <div className="stat-inner">
          <div className="stat-icon-box">{icon}</div>

          <div className="stat-text-group">
            <div className="stat-value">{formattedValue}</div>
            <div className="stat-title">{title}</div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default AnimatedStat;
