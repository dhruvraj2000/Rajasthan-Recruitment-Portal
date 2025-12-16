import React, { useState } from "react";
import CardsList from "../components/CardsList";
import CustomButton from "../components/Button";
import loginIcon from "../assets/Svg/log-in.png";
import examResults from "../assets/Svg/exam-results.png";
import examIcon from "../assets/Svg/exam.png";
import identityCard from "../assets/Svg/identity-card.png";
import userIcon from "../assets/Svg/user.png";
import medicalResult from "../assets/Svg/medical-result.png";
import scrutiny from "../assets/Svg/scrutiny.png";
import helpline from "../assets/Svg/helpline.png";
import eOtrPic1 from "../assets/Svg/eOtrPic1.png";
import eOtrPic2 from "../assets/Svg/eOtrPic2.png";
import eOtrPic3 from "../assets/Svg/eOtrPic3.png";
import eOtrPic4 from "../assets/Svg/eOtrPic4.png";
import pOtrPic1 from "../assets/Svg/pOtrPic1.png";
import CET_ques2 from "../assets/Svg/CET_ques2.png";
import FAQCollapse from "../components/FAQCollapse";
import Language from "../data/Language";
const Frequentlyquestions = ({ currentLang }) => {
  const [activeSection, setActiveSection] = useState("general");
  const [language, setLanguage] = useState("en");
  const [searchTerm, setSearchTerm] = useState("");

  const sectionHeadings = {
    general: Language[currentLang].generalHeading,
    billing: Language[currentLang].billingHeading,
    paymentotr: Language[currentLang].paymentotrHeading,
    helpline: Language[currentLang].helplineHeading,
    cet: Language[currentLang].cetHeading,
    result: Language[currentLang].resultHeading,
    scrutiny: Language[currentLang].scrutinyHeading,
    helpline2: Language[currentLang].helplineHeading2,
  };

  const faqData = {
    general: [
      {
        q: {
          en: Language[currentLang].generalq1,
          hi: Language[currentLang].generala1,
        },
        a: {
          en: Language[currentLang].generalq1,
          hi: Language[currentLang].generala1,
        },
      },
      {
        q: {
          en: Language[currentLang].generalq2,
          hi: Language[currentLang].generala2,
        },
        a: {
          en: Language[currentLang].generalq2,
          hi: Language[currentLang].generala2,
        },
      },
      {
        q: {
          en: Language[currentLang].generalq3,
          hi: Language[currentLang].generala3,
        },
        a: {
          en: Language[currentLang].generalq3,
          hi: Language[currentLang].generala3,
        },
      },
      {
        q: {
          en: Language[currentLang].generalq4,
          hi: Language[currentLang].generala4,
        },
        a: {
          en: Language[currentLang].generalq4,
          hi: Language[currentLang].generala4,
        },
      },
      {
        q: {
          en: Language[currentLang].generalq5,
          hi: Language[currentLang].generala5,
        },
        a: {
          en: Language[currentLang].generalq5,
          hi: Language[currentLang].generala5,
        },
      },
    ],

    billing: [
      {
        q: {
          en: Language[currentLang].billingq1,
          hi: Language[currentLang].billingq1,
        },
        a: {
          en: (
            <>
              {Language[currentLang].billinga1}
              <br />
              <br />
              <img src={eOtrPic1} alt="question" />
            </>
          ),
          hi: (
            <>
              {Language[currentLang].billinga1}
              <br />
              <br />
              <img src={eOtrPic1} alt="question" />
            </>
          ),
        },
      },
      {
        q: {
          en: Language[currentLang].billingq2,
          hi: Language[currentLang].billingq2,
        },
        a: {
          en: (
            <>
              {Language[currentLang].billinga2}
              <br />
              <br />
              <img src={eOtrPic2} alt="question" />
            </>
          ),
          hi: (
            <>
              {Language[currentLang].billinga2}
              <br />
              <br />
              <img src={eOtrPic2} alt="question" />
            </>
          ),
        },
      },
      {
        q: {
          en: Language[currentLang].billingq3,
          hi: Language[currentLang].billingq3_hi,
        },
        a: {
          en: (
            <>
              {Language[currentLang].billinga3}
              <br />
              <br />
              <img src={eOtrPic3} alt="question" />
              <br />
              <br />
              <img src={eOtrPic4} alt="question" />
            </>
          ),
          hi: (
            <>
              {Language[currentLang].billinga3}
              <br />
              <br />
              <img src={eOtrPic3} alt="question" />
              <br />
              <br />
              <img src={eOtrPic4} alt="question" />
            </>
          ),
        },
      },
    ],

    paymentotr: [
      {
        q: {
          en: Language[currentLang].paymentotrq1,
          hi: Language[currentLang].paymentotrq1,
        },
        a: {
          en: (
            <>
              {Language[currentLang].paymentotra1}
              <br />
              <br />
              <img src={pOtrPic1} alt="question" />
            </>
          ),
          hi: (
            <>
              {Language[currentLang].paymentotra1}
              <br />
              <br />
              <img src={pOtrPic1} alt="question" />
            </>
          ),
        },
      },
      {
        q: {
          en: Language[currentLang].paymentotrq2,
          hi: Language[currentLang].paymentotrq2,
        },
        a: {
          en: Language[currentLang].paymentotra2,
          hi: Language[currentLang].paymentotra2,
        },
      },
    ],

    helpline: [
      {
        q: {
          en: Language[currentLang].helplineq1,
          hi: Language[currentLang].helplineq1,
        },
        a: {
          en: <>{Language[currentLang].helplinea1},</>,

          hi: <>{Language[currentLang].helplinea1},</>,
        },
      },
    ],

    cet: [
      {
        q: {
          en: Language[currentLang].cetq1,
          hi: Language[currentLang].cetq1,
        },
        a: {
          en: Language[currentLang].ceta1,
          hi: Language[currentLang].ceta1,
        },
      },
      {
        q: {
          en: Language[currentLang].cetq2,
          hi: Language[currentLang].cetq2,
        },
        a: {
          en: <>{Language[currentLang].ceta2},</>,

          hi: <>{Language[currentLang].ceta2},</>,
        },
      },
    ],

    result: [],
    scrutiny: [],
    helpline2: [],
  };

  const cards = [
    {
      id: "general",
      title: Language[currentLang].otrHeading,
      desc: Language[currentLang].otrDesc,
      img: loginIcon,
    },
    {
      id: "billing",
      title: Language[currentLang].examApplication,
      desc: Language[currentLang].examApplicationDesc,
      img: examResults,
    },
    {
      id: "paymentotr",
      title: Language[currentLang].examEdit,
      desc: Language[currentLang].examEditOtr,
      img: examIcon,
    },
    {
      id: "helpline",
      title: Language[currentLang].admitcard,
      desc: Language[currentLang].DownloadAdmitCard,
      img: identityCard,
    },
    {
      id: "cet",
      title: Language[currentLang].objection,
      desc: Language[currentLang].submitObjection,
      img: userIcon,
    },
    {
      id: "result",
      title: Language[currentLang].resultHeading,
      desc: Language[currentLang].checkResult,
      img: medicalResult,
    },
    {
      id: "scrutiny",
      title: Language[currentLang].scrutinyHeading,
      desc: Language[currentLang].scrutinyDetails,
      img: scrutiny,
    },
    {
      id: "helpline2",
      title: Language[currentLang].helplineHeading,
      desc: Language[currentLang].supportHelpline,
      img: helpline,
    },
  ];

  return (
    <div className="faq-container">
      <div className="header-actions">

        <div className="headerbackground header-login-btn faq-top-header">
          <h1>{Language[currentLang].faqQues}</h1>
          <p>{Language[currentLang].faqAnsw}</p>


          <div className="search-container">
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>

              <input
                placeholder={Language[currentLang].searchQues}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cards">
          {cards.map((c) => (
            <CardsList
              key={c.id}
              card={c}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              currentLang={currentLang}
            />
          ))}
        </div>

        <div className="faq-section">
          <h2 style={{ color: "#3b4ce2" }}>{sectionHeadings[activeSection]}</h2>

          <FAQCollapse
            data={faqData[activeSection]}
            language={language}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default Frequentlyquestions;
