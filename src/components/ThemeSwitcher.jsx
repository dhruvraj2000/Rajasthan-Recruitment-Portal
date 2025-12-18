import React from "react";

export default function ThemeSwitcher({ setTheme }) {
  return (
    <div
      className="theme-switcher  gap-2"
      style={{ marginRight: "5px", marginLeft: "5px" }}
    >
      <a
        type="button"
        onClick={() => setTheme("theme-blue")}
        aria-label="Blue theme"
      >
        <img src="/src/assets/Svg/blueicon.svg" alt="Blue theme" />
      </a>

      <a
        type="button"
        onClick={() => setTheme("theme-pink")}
        aria-label="Pink theme"
      >
        <img src="/src/assets/Svg/pinkicon.svg" alt="Pink theme" />
      </a>

      <a
        type="button"
        onClick={() => setTheme("theme-orange")}
        aria-label="Orange theme"
      >
        <img src="/src/assets/Svg/orange.svg" alt="Orange theme" />
      </a>
    </div>
  );
}
