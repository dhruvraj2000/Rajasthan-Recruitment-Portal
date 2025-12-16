import React from "react";
import { Skeleton } from "antd";
import { BarChartOutlined } from "@ant-design/icons";

/* -----------------------------
   🔵 Circle Skeleton
------------------------------ */
export const SkeletonCircle = ({ size = "default", active = true }) => (
  <Skeleton.Avatar shape="circle" size={size} active={active} />
);

/* -----------------------------
   ◼️ Square / Box Skeleton
------------------------------ */
export const SkeletonSquare = ({ size = "default", active = true }) => (
  <Skeleton.Avatar shape="square" size={size} active={active} />
);

/* -----------------------------
   🖼️ Image Skeleton (Better)
------------------------------ */
export const SkeletonImg = ({
  active = true,
  width = "100%",
  height = 120,
  radius = 8,
}) => (
  <Skeleton.Image
    active={active}
    style={{ width, height, borderRadius: radius }}
  />
);

/* -----------------------------
   📤 Button Skeleton (rounded)
------------------------------ */
export const SkeletonButton = ({ width = 150, active = true }) => (
  <Skeleton.Button active={active} style={{ width }} shape="round" />
);

/* -----------------------------
   📝 Input Skeleton
------------------------------ */
export const SkeletonInput = ({ active = true, width = "100%" }) => (
  <Skeleton.Input 
    active={active} 
    style={{ width, display: "block" }} 
  />
);


/* -----------------------------
   💬 Text Line Skeleton (THICK)
------------------------------ */
export const SkeletonLine = ({
  active = true,
  width = "80%",
  height = 14, // 🔥 more visible line
}) => (
  <div style={{ width }}>
    <Skeleton.Input
      active={active}
      style={{
        width: "100%",
        height: height, // <-- thicker text line
        borderRadius: 6,
      }}
    />
  </div>
);

/* -----------------------------
   🧾 Card Skeleton
------------------------------ */
export const SkeletonCard = ({ active = true }) => (
  <Skeleton active={active} paragraph={{ rows: 3 }} />
);

/* -----------------------------
   🔷 Icon Skeleton
------------------------------ */
export const SkeletonIcon = ({ active = true }) => (
  <Skeleton.Node active={active}>
    <BarChartOutlined style={{ fontSize: 24 }} />
  </Skeleton.Node>



);
