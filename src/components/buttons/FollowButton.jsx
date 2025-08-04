import React from "react";
import { PlusIcon } from "../../constants/icons";

const FollowButton = () => {
  return (
    <button className="border border-black rounded-4xl px-3 py-1 flex items-center transition-all duration-100 hover:shadow-inner hover:border-2">
      <PlusIcon />
      <span className="text-[##181818] ml-2 font-bold">Follow</span>
    </button>
  );
};

export default FollowButton;
