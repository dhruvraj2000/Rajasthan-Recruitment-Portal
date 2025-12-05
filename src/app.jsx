import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Ssoid from "./pages/Ssoid.jsx";
import Admitcard from "./pages/Admitcard.jsx"
import Results from "./pages/results.jsx";
import FAQs from "./pages/FAQs.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import "./css/color.css";
import "./css/style.css";
import ThemeSwitcher from "./components/ThemeSwitcher.jsx";
import ThemeNavigation from "./components/ThemeNavigation.jsx"
import { useState } from "react";
import Language from "./data/Language.jsx";


export default function App() {
  const [currentLang, setCurrentLang] = useState("en");

  const [theme, setTheme] = useState("theme-blue");

  return (
    <div className={`app-wrapper ${theme}`}>
      <BrowserRouter>
        <ThemeSwitcher setTheme={setTheme} />
        <ThemeNavigation  currentLang={currentLang} setCurrentLang={setCurrentLang}/>
        <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />
        <Navbar />
        <main style={{ minHeight: "80vh" }}>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ssoid" element={<Ssoid currentLang={currentLang} />} />
              <Route path="/Admitcard"element={<Admitcard currentLang={currentLang}  />}/>
              <Route path="/results" element={<Results currentLang={currentLang}  />} />
              <Route path="/faq" element={<FAQs currentLang={currentLang}  />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
