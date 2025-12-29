import React from "react";

const Sectionlabel = ({ labeltext, sublabeltext }) => {
  return (
    <div class="Section-label">
      <h2 className="section-title text-3xl font-semibold text-center mb-8">
        {labeltext}
        <span className="sublabel-text">{sublabeltext}</span>
      </h2>
    </div>
  );
};

export default Sectionlabel;
