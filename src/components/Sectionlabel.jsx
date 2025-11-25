import React from "react";

const Sectionlabel = ({ labeltext, sublabeltext }) => {
  return (
    <div class="Section-label">
      <h2 className="section-title text-3xl font-semibold text-center mb-8">
        {labeltext}
        <label className="sublabel-text">{sublabeltext}</label>
      </h2>
    </div>
  );
};

export default Sectionlabel;
