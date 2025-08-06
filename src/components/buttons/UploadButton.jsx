import React from "react";

const UploadButton = ({ title }) => {
  return (
    <label className="rounded-2xl bg-[#0B65C2] hover:bg-[#004182] px-4 py-1 cursor-pointer inline-block">
      <span className="font-bold text-white">{title}</span>
      <input type="file" className="hidden" />
    </label>
  );
};

export default UploadButton;
