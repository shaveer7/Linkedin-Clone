import React from "react";

const NavigationButton = ({ label, Icon }) => {
  return (
    <div>
      <div className="flex flex-col items-center px-3">
        <Icon className="h-5 w-5" />
        <div className="text-base">{label}</div>
      </div>
    </div>
  );
};

export default NavigationButton;
