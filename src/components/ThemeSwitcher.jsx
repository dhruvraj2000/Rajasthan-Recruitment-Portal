import React from "react";
import blueicon from "../assets/Svg/blueicon.svg";
import pinkicon from "../assets/Svg/pinkicon.svg";
import orange from "../assets/Svg/orange.svg";

export default function ThemeSwitcher({ setTheme }) {
  return (
   <div
  className="theme-switcher gap-2"
  style={{ marginRight: "5px", marginLeft: "5px" }}
>
  <a
    role="button"
    tabIndex={0}
    onClick={() => setTheme("theme-blue")}
    aria-label="Switch to blue theme"
  >
    <img src={blueicon} alt="blue color logo" />
  </a>

  <a
    role="button"
    tabIndex={0}
    onClick={() => setTheme("theme-pink")}
    aria-label="Switch to pink theme"
  >
    <img src={pinkicon} alt="pink color logo" />
  </a>

  <a
    role="button"
    tabIndex={0}
    onClick={() => setTheme("theme-orange")}
    aria-label="Switch to orange theme"
  >
    <img src={orange} alt= "orange color logo" />
  </a>
</div>

  );
}
