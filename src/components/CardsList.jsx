import React from "react";
import CustomButton from "../components/Button";
import Language from "../data/Language";

const CardsList = ({ card, activeSection, setActiveSection, currentLang }) => {
  return (
    <div
      className={`card ${activeSection === card.id ? "active" : ""}`}
      onClick={() => setActiveSection(card.id)}
    >
      <img src={card.img} alt="" className="card-icon" />

      <div className="card-title">{card.title}</div>
      <p className="card-desc header-actions">{card.desc}</p>
      <div className="header-actions">
      <CustomButton
        type="primary"
        buttontext={Language[currentLang].viewDetails}
        classname="view-btn card-btn header-login-btn" 
      />
     </div>

     </div>
  );
};

export default CardsList;
