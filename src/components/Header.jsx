import React from 'react'
import Logo from "../assets/Svg/Logo.svg";
import CustomButton from "./Button";

const Header=() =>{
  return (
    <header className="header-container">
        <div className="header-inner">
          <div className="logo-title">
            <img src={Logo} alt="logo" className="header-logo" />
          </div>

          <div className="header-actions">
            <CustomButton
              type="primary"
              buttontext="Login"
              classname="header-login-btn"
            />
          </div>
        </div>
      </header>

  )
}

export default Header