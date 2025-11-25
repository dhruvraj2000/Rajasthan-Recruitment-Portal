import React from "react";
import CustomButton from "../components/Button";

const CardsList = ({ cards, activeSection, setActiveSection, language, style }) => {
  return (
    <div className="cards">
      {cards.map((c) => (
        <div
          className={`card ${activeSection === c.id ? "active" : ""}`}
          key={c.id}
          onClick={() => {
            setActiveSection(c.id);
          }}
        >
          <img src={c.img} alt="" className="card-icon" />
          
          <div className="card-title">{c.title[language]}</div>
          <p className="card-desc">{c.desc[language]}</p>

          <div className="header-actions">
            <CustomButton
              type="primary"
              buttontext={language === "en" ? "View Details" : "विवरण देखें"}
              classname="view-btn header-login-btn"
              style={style}
              onClick={() => console.log("Button clicked")}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsList;
