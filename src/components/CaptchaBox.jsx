import React, { useEffect, useRef, useState } from "react";
import CustomButton from "./Button";
import CustomInput from "./Input";
import Language from "../data/Language";
const generateCaptchaText = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let text = "";
  for (let i = 0; i < 6; i++) {
    text += chars[Math.floor(Math.random() * chars.length)];
  }
  return text;
};

const CaptchaBox = ({ length = 6, onVerify, currentLang }) => { 
  const canvasRef = useRef(null);
  const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");

  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "26px Arial";
    ctx.fillStyle = "#000";

    const angle = Math.random() * 0.3 - 0.15;
    ctx.save();
    ctx.translate(75, 25);
    ctx.rotate(angle);
    ctx.fillText(text, -50, 10);
    ctx.restore();

    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
      ctx.lineWidth = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.moveTo(Math.random() * 150, Math.random() * 40);
      ctx.lineTo(Math.random() * 150, Math.random() * 40);
      ctx.stroke();
    }
  };

  const refresh = () => {
    const newText = generateCaptchaText(length);
    setCaptcha(newText);
    drawCaptcha(newText);
  };

  useEffect(() => {
    refresh();
  }, [length]);

  const verify = () => {
    onVerify?.(input.toUpperCase() === captcha.toUpperCase());
  };

  const playAudio = () => {
    const utter = new SpeechSynthesisUtterance();
    utter.text = captcha.split("").join(" ");
    utter.rate = 0.8;
    utter.pitch = 1;
    speechSynthesis.speak(utter);
  };

  return (
    <div className="captcha-wrapper">
      <div className="captcha-area">
        <canvas ref={canvasRef} width={150} height={40}></canvas>

        <button className="reload-btn" onClick={refresh}>↻</button>
        <button className="sound-btn" onClick={playAudio}>🔊</button>
      </div>

      <CustomInput 
        className="captcha-input"
        placeholder={Language[currentLang].captchaplaceholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default CaptchaBox;
