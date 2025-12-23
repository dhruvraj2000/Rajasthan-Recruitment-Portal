import React from "react";
import CustomButton from "../components/Button";
import Language from "../data/Language";

const CardsList = ({ card, activeSection, setActiveSection, currentLang }) => {
  return (
    <div
      className={`card ${activeSection === card.id ? "active" : ""}`}
      onClick={() => setActiveSection(card.id)}
    >
      <img src={card.img} alt={card.title} className="card-icon" />

      <div className="card-title">{card.title}</div>
      <p className="card-desc header-actions">{card.desc}</p>

      {/* ✅ Dynamic Button */}
      {card.button?.show && (
        <div className="header-actions">
          <CustomButton
            type={card.button.type || "primary"}
            buttontext={card.button.text}
            classname="view-btn card-btn header-login-btn"
          />
        </div>
      )}
    </div>
  );
};


export default CardsList;
