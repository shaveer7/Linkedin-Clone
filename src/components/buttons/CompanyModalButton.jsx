import React from "react";

const CompanyModalButton = ({ title, source, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 group cursor-pointer"
    >
      <img className="h-18 w-18" src={source} />
      <div className="font-semibold">{title}</div>
    </button>
  );
};

export default CompanyModalButton;
