import React from "react";
import Language from "../data/Language";
import { Row, Col } from "antd";
import languageicon from "../assets/Svg/language.svg"
import ThemeSwitcher from "./ThemeSwitcher";
import { color } from "framer-motion";


const ThemeNavigation = ({currentLang, setCurrentLang,setTheme,href }) => {
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
      alt="Indian Flag logo"
      aria-hidden="true"
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

   <a  aria-label="Change language" onClick={() => setCurrentLang(currentLang === "en" ? "hi" : "en")} href="#">
                <img src={languageicon} alt="Change language logo" className="language-icon"/>
              </a>

                <a href="#" id="contrast" className="me-3">
                  <i className="bi bi-circle-half"></i>
                </a>

               <a href="#" className="skip-link">
                {Language[currentLang]?.skipContent || "Skip to main content"}
              </a>
              </div>
            </div>

      </div>
    </div>
  );
};

export default ThemeNavigation;