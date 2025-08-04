import React from "react";

const QuickAccessComp = ({ Icon, title }) => {
  return (
    <div className="flex items-center">
      <Icon />
      <a href="#" className="text-xs font-semibold hover:underline">
        {title}
      </a>
    </div>
  );
};

export default QuickAccessComp;
