import React, {useState} from 'react'
import Logo from "../assets/Svg/Logo.svg";
import CustomButton from "./Button";
import languageicon from "../assets/Svg/language.svg"
import Language from '../data/Language';





const Header=({ currentLang, setCurrentLang }) =>{
 

  return (
    <header className="header-container">
        <div className="header-inner">
          <div className="logo-title">
            <img src={Logo} alt="logo" className="header-logo" />
          </div>

          <div className="header-actions">

             <a onClick={() => setCurrentLang(currentLang === "en" ? "hi" : "en")}>
              <img src={languageicon} alt="language icon" className="language-icon"/>
            </a>
            <CustomButton
              type="primary"
                buttontext={Language[currentLang].login}
              classname="header-login-btn"
            />
          </div>
        </div>
      </header>

  )
}

export default Header