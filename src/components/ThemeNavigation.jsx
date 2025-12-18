import React from "react";
import Language from "../data/Language";
import { Row, Col } from "antd";
import languageicon from "../assets/Svg/language.svg"
import ThemeSwitcher from "./ThemeSwitcher";


const ThemeNavigation = ({currentLang, setCurrentLang,setTheme }) => {
  return (
    <div className="topbar d-flex align-items-center py-1">
      <div className="container-fluid container-space">

            <a
              href="https://rajasthan.gov.in"
              title="Government of Rajasthan"
              target="_blank"
              rel="noreferrer"
            >
              <span className="HeadName">
                <img
                  src="../src/assets/Svg/ind-flag.svg"
                  alt=""
                  style={{
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                />
                राजस्थान सरकार | Government of Rajasthan
              </span>
            </a>



            <div className="access-container d-flex align-items-center justify-content-end">
              <div id="access-icons" className="d-flex align-items-center">
                <a className="cursor-p me-3"  onClick={() => window.getScreenReader?.()}>
                  Screen Reader Access
                </a>
            <ThemeSwitcher setTheme={ setTheme } />
            <a href="#" id="increaseFont" className="me-2">
                  A<sup>+</sup>
                </a>

                <a href="#" id="linkReset" className="me-2">
                  A
                </a>

                <a href="#" id="decreaseFont" className="me-2">
                  A<sup>-</sup>
                </a>

   <a onClick={() => setCurrentLang(currentLang === "en" ? "hi" : "en")}>
                <img src={languageicon} alt="language icon" className="language-icon"/>
              </a>

                <a href="#" id="contrast" className="me-3">
                  <i className="bi bi-circle-half"></i>
                </a>

                <a href="#examLifeCycle" id="skip" className="me-3">
                  {Language[currentLang].skipContent}
                </a>
              </div>
            </div>

      </div>
    </div>
  );
};

export default ThemeNavigation;