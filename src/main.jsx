import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import 'antd/dist/reset.css'
// import './css/style.css'
import "./css/style.css";
import "./css/color.css";

// import "slick-carousel/slick/slick-theme.css";
// import '../node_modules/slick-carousel/slick/slick.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)