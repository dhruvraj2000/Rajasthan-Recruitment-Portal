import React from "react";


const LogoLoader = () => {
  return (
    <div className="loader-overlay">
      <img
        src="/withouttextlogo.svg"
        alt="Loading"
        className="loader-logo"
      />
    </div>
  );
};

export default LogoLoader;