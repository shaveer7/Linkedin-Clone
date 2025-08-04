import React from "react";
import { GreenVideoIcon } from "../../constants/icons";

const PostActionButton = ({ label, Icon }) => {
  return (
    <button className=" flex items-center space-x-1 px-2 py-4 rounded-xs hover:bg-[#F3F3F3] hover:cursor-pointer ">
      <Icon />
      <div className="font-medium">{label}</div>
    </button>
  );
};

export default PostActionButton;
