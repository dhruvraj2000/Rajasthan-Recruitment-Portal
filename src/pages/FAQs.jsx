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
          en: "What is the reason of below mentioned message is showing during the OTR creation/KYC process?",
          hi: "ओटीआर निर्माण/केवाईसी प्रक्रिया के दौरान नीचे उल्लिखित संदेश दिखाई देने का क्या कारण है?",
        },
        a: {
          en: "When candidate create OTR profile by using same documents (Aadhar/Jan Aadhar) which is previously used in other SSO I.D to create OTR profile then mentioned message is showing. Candidate can click on cancel button to avoid Deactivation of SSO I.D showing on pop up.",
          hi: "जब उम्मीदवार उसी दस्तावेज़ (आधार/जन आधार) का उपयोग करके ओटीआर प्रोफ़ाइल बनाता है जो पहले किसी अन्य एसएसओ आईडी में उपयोग किया गया था, तो यह संदेश प्रदर्शित होता है। उम्मीदवार पॉपअप पर दिखाई दे रही एसएसओ आईडी को निष्क्रिय करने से बचने के लिए 'रद्द करें' बटन पर क्लिक कर सकता है।",
        },
      },
      {
        q: {
          en: "What will happen If I will click “Ok” on below mentioned message showing on POP Up?",
          hi: "यदि मैं नीचे दिए गए पॉपअप संदेश पर 'ठीक है' पर क्लिक करता हूं तो क्या होगा?",
        },
        a: {
          en: "When candidate click “Ok” on mentioned message then candidate’s previously generated OTR profile get deactivated and candidate not able to fill any new application form from deactivated profile.",
          hi: "जब उम्मीदवार 'ठीक है' पर क्लिक करता है, तो उसकी पहले से बनी ओटीआर प्रोफ़ाइल निष्क्रिय हो जाती है और वह उस प्रोफ़ाइल से कोई नया आवेदन पत्र नहीं भर सकता।",
        },
      },
      {
        q: {
          en: "What steps I need to take, if I don’t want to deactivate my OTR profile of SSO I.D mentioned on below mentioned pop up?",
          hi: "यदि मैं अपनी ओटीआर प्रोफ़ाइल को निष्क्रिय नहीं करना चाहता तो मुझे क्या करना चाहिए (जो पॉपअप में दिखाई गई है)?",
        },
        a: {
          en: "If you don’t want to deactivate mentioned OTR profile then please click on Cancel Button or Cross option given on Pop Up.",
          hi: "यदि आप ओटीआर प्रोफ़ाइल को निष्क्रिय नहीं करना चाहते हैं, तो कृपया पॉपअप पर दिए गए रद्द करें बटन या क्रॉस विकल्प पर क्लिक करें।",
        },
      },
      {
        q: {
          en: "Why below mentioned message is showing on click of Apply Now button?",
          hi: "Apply Now बटन पर क्लिक करने पर नीचे दिया गया संदेश क्यों दिखाई देता है?",
        },
        a: {
          en: "When candidate create OTR profile in multiple SSO I.D by using same documents (Aadhar/Jan Aadhar) then previously created OTR profile get deactivated and candidate not able to fill any application form from deactivated profile. SSO I.D mentioned in pop up is the SSO I.D which is currently active and can be use to fill any application form. If you are not able to login on SSO I.D mentioned on pop up, then please create new SSO I.D and map your new SSO I.D with old SSO I.D by mail to “HELPDESK.SSO@RAJASTHAN.GOV.IN”. Please mention your old SSO I.D and new SSO I.D and attach soft copy of your Aadhar details on mail. After mapping, you can transfer your all application form from old SSO I.D to new SSO I.D.",
          hi: "जब कोई उम्मीदवार एक से अधिक SSO ID में समान दस्तावेज़ों (आधार/जन आधार) का उपयोग करके ओटीआर प्रोफ़ाइल बनाता है, तो पहले से बनी प्रोफ़ाइल निष्क्रिय हो जाती है और वह उस प्रोफ़ाइल से आवेदन नहीं कर सकता। पॉपअप में दिखाई गई SSO ID वर्तमान में सक्रिय होती है जिससे आप आवेदन कर सकते हैं। यदि आप उस SSO ID में लॉगिन नहीं कर पा रहे हैं, तो एक नया SSO ID बनाएं और उसे पुराने SSO ID से मैप करने के लिए 'HELPDESK.SSO@RAJASTHAN.GOV.IN' पर ईमेल करें। ईमेल में पुराना और नया SSO ID और आधार की सॉफ्ट कॉपी संलग्न करें। मैपिंग के बाद आप अपने सभी फॉर्म को पुराने SSO ID से नए SSO ID में ट्रांसफर कर सकते हैं।",
        },
      },
      {
        q: {
          en: "What steps to be taken by me if my OTR profile get deactivated?",
          hi: "यदि मेरी ओटीआर प्रोफ़ाइल निष्क्रिय हो गई है तो मुझे क्या करना चाहिए?",
        },
        a: {
          en: "Candidate need to login on SSO I.D whose OTR profile currently active and then fill new application forms.",
          hi: "उम्मीदवार को उस SSO ID में लॉगिन करना होगा जिसकी ओटीआर प्रोफ़ाइल वर्तमान में सक्रिय है और फिर नए आवेदन पत्र भरने होंगे।",
        },
      },
    ],

    billing: [
      {
        q: {
          en: "What is the process to edit Candidate Name, Father Name, D.O.B and gender in OTR, created through Jan Aadhar/Aadhar?",
          hi: "जन आधार/आधार के माध्यम से बनाए गए ओटीआर में उम्मीदवार का नाम, पिता का नाम, जन्म तिथि और लिंग संपादित करने की प्रक्रिया क्या है?",
        },
        a: {
          en: (
            <>
              Candidate can click on “Update Details from Jan-Aadhaar”/ “Update
              Details from Aadhaar” button to update Candidate Name, Father
              Name, D.O.B and gender in OTR but before that candidate needs to
              update mentioned details in Jan Aadhar/Aadhar document.
              <br />
              <br />
              <img src={eOtrPic1} alt="question" />
            </>
          ),
          hi: (
            <>
              उम्मीदवार “Update Details from Jan-Aadhar”/ “Update Details from
              Aadhar” बटन पर क्लिक कर के ओटीआर में नाम, पिता का नाम, जन्म तिथि
              और लिंग को अपडेट कर सकता है, लेकिन उससे पहले उम्मीदवार को जन
              आधार/आधार दस्तावेज़ में ये विवरण अपडेट करने होंगे।
              <br />
              <br />
              <img src={eOtrPic1} alt="question" />
            </>
          ),
        },
      },
      {
        q: {
          en: "What is the process to edit Category, Specially Abled Category and Domicile details in OTR?",
          hi: "ओटीआर में श्रेणी, विशेष योग्यजन श्रेणी और निवास स्थान विवरण संपादित करने की प्रक्रिया क्या है?",
        },
        a: {
          en: (
            <>
              Candidate can click on “Edit Details” button to update mentioned
              details. Please note that candidate can edit mentioned details
              only two times. Please note that changes in mentioned details will
              not show in already submitted forms.
              <br />
              <br />
              <img src={eOtrPic2} alt="question" />
            </>
          ),
          hi: (
            <>
              उम्मीदवार इन विवरणों को अपडेट करने के लिए “Edit Details” बटन पर
              क्लिक कर सकते हैं। कृपया ध्यान दें कि उम्मीदवार उल्लिखित विवरण को
              केवल दो बार संपादित कर सकते हैं। कृपया ध्यान दें कि उल्लिखित विवरण
              में परिवर्तन पहले से भरे किए गए फॉर्म में नहीं दिखेंगे।
              <br />
              <br />
              <img src={eOtrPic2} alt="question" />
            </>
          ),
        },
      },
      {
        q: {
          en: "What is the process to edit Candidate Name, Father Name, D.O.B and gender in OTR, previously created through SSO profile?",
          hi: "एसएसओ प्रोफाइल के माध्यम से बनाए गए ओटीआर में नाम, पिता का नाम, जन्म तिथि और लिंग संपादित करने की प्रक्रिया क्या है?",
        },
        a: {
          en: (
            <>
              Candidate who previously created OTR through SSO profile have to
              do KYC either through Aadhar/Jan-Aadhar. Details available on
              Aadhar/Jan-Aadhar get fetched from mentioned documents after OTP
              authentication, and after candidate approval the same details get
              updated on OTR profile. Please note that changes will not show in
              already submitted forms.
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
              जिस उम्मीदवार ने पहले एसएसओ प्रोफ़ाइल के माध्यम से ओटीआर बनाया था,
              उसे आधार/जन-आधार के माध्यम से केवाईसी करना होगा। आधार/जन-आधार पर
              उपलब्ध विवरण ओटीपी प्रमाणीकरण के बाद उल्लिखित दस्तावेजों से
              प्राप्त किए जाएंगे और उम्मीदवार के अनुमोदन के बाद वही विवरण ओटीआर
              प्रोफ़ाइल पर अपडेट हो जाएंगे। कृपया ध्यान दें कि परिवर्तन पहले से
              भरे फॉर्म में नहीं दिखेंगे।
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
          en: "What is the process to pay fee on OTR?",
          hi: "ओटीआर पर शुल्क का भुगतान करने की प्रक्रिया क्या है?",
        },
        a: {
          en: (
            <>
              On the payment page of OTR, based on the selection of category and
              specially abled category status, OTR fee will be charged from the
              candidate. Candidate needs to click on the "Pay Fee" option to pay
              OTR fee.
              <br />
              <br />
              <img src={pOtrPic1} alt="question" />
            </>
          ),
          hi: (
            <>
              ओटीआर के भुगतान पृष्ठ पर, श्रेणी के चयन और विशेष योग्यजन श्रेणी की
              स्थिति के आधार पर, उम्मीदवार से ओटीआर शुल्क लिया जाएगा। ओटीआर
              शुल्क का भुगतान करने के लिए उम्मीदवार को "भुगतान शुल्क" विकल्प पर
              क्लिक करना होगा।
              <br />
              <br />
              <img src={pOtrPic1} alt="question" />
            </>
          ),
        },
      },
      {
        q: {
          en: "What will be the Fee applicable under OTR profile for Unreserved Category candidate, Reserved Category Candidate and Candidate belongs to Specially Abled Category?",
          hi: "ओटीआर प्रोफ़ाइल के अंतर्गत अनारक्षित श्रेणी, आरक्षित श्रेणी और विशेष योग्यजन श्रेणी के उम्मीदवार के लिए लागू शुल्क कितना होगा?",
        },
        a: {
          en: "For unreserved category candidate the applicable Fee will be 600 rupee and For reserved category candidate the applicable Fee will be 400 rupee and candidate belongs to Specially Abled Category have to pay 400 rupee irrespective of His/Her main category that is Reserved/Unreserved category.",
          hi: "अनारक्षित श्रेणी के उम्मीदवार के लिए लागू शुल्क 600 रुपये होगा, आरक्षित श्रेणी के उम्मीदवार के लिए लागू शुल्क 400 रुपये होगा और विशेष योग्यजन श्रेणी के उम्मीदवार को उसकी मुख्य श्रेणी (आरक्षित/अनारक्षित) के बावजूद 400 रुपये का भुगतान करना होगा।",
        },
      },
    ],

    helpline: [
      {
        q: {
          en: "If I am facing any issues regarding advertisement then where I will contact?",
          hi: "अगर मुझे विज्ञापन से संबंधित कोई समस्या हो रही है तो मैं किससे संपर्क करूं?",
        },
        a: {
          en: (
            <>
              <span style={{ color: "red" }}>
                Rajasthan Public Service Commission (RPSC)
              </span>{" "}
              related vigyapti and exam related issues please contact below:
              <br />
              <span style={{ color: "red" }}>
                Helpline Number: 0145-2635212 / 2635200 <br />
                Email I.D: feedback.rpsc@rajasthan.gov.in
              </span>
              <br />
              <br />
              For{" "}
              <span style={{ color: "red" }}>
                Rajasthan Staff Selection Board (RSSB)
              </span>{" "}
              related vigyapti and exam issues please contact below:
              <br />
              <span style={{ color: "red" }}>
                Helpline Number: 0141-2722520
              </span>
              <br />
              <br />
              For payment issues or any technical problem on the Recruitment
              Portal, contact:
              <br />
              <span style={{ color: "red" }}>
                Helpline Number: 9352323625 / 7340557555 <br />
                Email I.D: recruitmenthelpdesk@rajasthan.gov.in
              </span>
            </>
          ),

          hi: (
            <>
              <span style={{ color: "red" }}>
                राजस्थान लोक सेवा आयोग (RPSC)
              </span>{" "}
              से संबंधित विज्ञप्ति और परीक्षाओं की समस्याओं के लिए नीचे दिए गए
              विवरण पर संपर्क करें:
              <br />
              <span style={{ color: "red" }}>
                हेल्पलाइन नंबर: 0145-2635212 / 2635200 <br />
                ईमेल आईडी: feedback.rpsc@rajasthan.gov.in
              </span>
              <br />
              <br />
              <span style={{ color: "red" }}>
                राजस्थान कर्मचारी चयन बोर्ड (RSSB)
              </span>{" "}
              से संबंधित विज्ञप्ति और परीक्षाओं की समस्याओं के लिए नीचे दिए गए
              विवरण पर संपर्क करें:
              <br />
              <span style={{ color: "red" }}>हेल्पलाइन नंबर: 0141-2722520</span>
              <br />
              <br />
              भुगतान से संबंधित समस्या या भर्ती पोर्टल पर किसी भी तकनीकी समस्या
              के लिए नीचे दिए गए विवरण पर संपर्क करें:
              <br />
              <span style={{ color: "red" }}>
                हेल्पलाइन नंबर: 9352323625 / 7340557555 <br />
                ईमेल आईडी: recruitmenthelpdesk@rajasthan.gov.in
              </span>
            </>
          ),
        },
      },
    ],

    cet: [
      {
        q: {
          en: "What is the process to fill form on CET based recruitment?",
          hi: "सीईटी आधारित भर्ती में फॉर्म भरने की प्रक्रिया क्या है?",
        },
        a: {
          en: "Candidate needs to click on “Apply Now” button and enter required CET application number. Please note that the CET applications form should be available on SSO I.D through which candidate currently filling CET based application form.",
          hi: "उम्मीदवार को 'Apply Now' बटन पर क्लिक करना होगा और आवश्यक CET आवेदन संख्या दर्ज करनी होगी। कृपया ध्यान दें कि CET आवेदन फॉर्म उस SSO ID पर उपलब्ध होना चाहिए जिससे उम्मीदवार वर्तमान में CET आधारित आवेदन फॉर्म भर रहा है।",
        },
      },
      {
        q: {
          en: "What steps I need to take If my CET application form is not available on my current SSO ID and I want to fill CET based recruitment using my current SSO ID?",
          hi: "यदि मेरा CET आवेदन फॉर्म वर्तमान SSO ID पर उपलब्ध नहीं है और मैं अपने वर्तमान SSO ID से CET आधारित भर्ती फॉर्म भरना चाहता हूँ तो मुझे क्या करना होगा?",
        },
        a: {
          en: (
            <>
              If candidate’s CET application form is not available on his
              current SSO ID then first, candidate needs to migrate his CET
              application to current SSO ID from old SSO ID using any one of the
              below processes.
              <br />
              <br />
              <b>
                1. Move Application Form using “Fetch Application Form” Button:
              </b>
              <br />
              Candidate should use the “Fetch Application Form” button available
              on the OTR screen. For this feature, candidate name, father name,
              DOB and Gender should be the same in both (the application form
              you want to migrate and the OTR you are using).
              <br />
              <br />
              <img src={CET_ques2} alt="cetQuestion" />
              <br />
              <br />
              If you are not able to move your application form using the above
              feature (Ref Point 1), then use the following:
              <br />
              <br />
              <b>
                2. Move Application Form by mapping old SSO ID to new SSO ID:
              </b>
              <br />
              Candidate can move his application form to current SSO ID by
              sending an email to "helpdesk.sso@rajasthan.gov.in" requesting
              them to map old SSO ID to new SSO ID. For this, candidate needs to
              send old SSO ID and new SSO ID details with a soft copy of Aadhaar
              card.
            </>
          ),

          hi: (
            <>
              यदि उम्मीदवार का CET आवेदन फॉर्म वर्तमान SSO ID पर उपलब्ध नहीं है,
              तो सबसे पहले उम्मीदवार को अपना CET आवेदन फॉर्म पुराने SSO ID से
              वर्तमान SSO ID पर स्थानांतरित करना होगा। इसके लिए नीचे दिए गए किसी
              एक प्रक्रिया का उपयोग करें।
              <br />
              <br />
              <b>
                1. “Fetch Application Form” बटन का उपयोग करके आवेदन फॉर्म
                स्थानांतरित करें:
              </b>
              <br />
              उम्मीदवार को OTR स्क्रीन पर उपलब्ध “Fetch Application Form” बटन का
              उपयोग करना चाहिए। इस सुविधा के लिए उम्मीदवार का नाम, पिता का नाम,
              जन्म तिथि और लिंग दोनों (जिस आवेदन फॉर्म को आप स्थानांतरित करना
              चाहते हैं और जो OTR आप उपयोग कर रहे हैं) में समान होना चाहिए।
              <br />
              <br />
              <img src={CET_ques2} alt="cetQuestion" />
              <br />
              <br />
              यदि उपरोक्त सुविधा (बिंदु 1) का उपयोग करके आप आवेदन फॉर्म को
              स्थानांतरित नहीं कर पा रहे हैं, तो निम्न प्रक्रिया का उपयोग करें:
              <br />
              <br />
              <b>
                2. पुराने SSO ID को नए SSO ID से मैप करके आवेदन फॉर्म
                स्थानांतरित करें:
              </b>
              <br />
              उम्मीदवार "helpdesk.sso@rajasthan.gov.in" पर ईमेल भेजकर पुराने SSO
              ID को नए SSO ID से मैप करने का अनुरोध कर सकता है। इसके लिए
              उम्मीदवार को पुराने और नए SSO ID की जानकारी और आधार कार्ड की
              सॉफ़्ट कॉपी ईमेल पर भेजनी होगी।
            </>
          ),
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
    <h2 style={{ color: "#3b4ce2" }}>
      {sectionHeadings[activeSection]}
    </h2>

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
