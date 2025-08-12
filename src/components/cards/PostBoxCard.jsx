import React from "react";
import PostInputBar from "./PostInputBar";
import PostActionButtonsBar from "../buttons/PostActionButtonsBar";

const PostBoxCard = () => {
  return (
    <div>
      <div className="bg-white pt-4 px-4 pb-0 rounded-lg shadow-sm space-y-4">
        <PostInputBar />
        <PostActionButtonsBar />
      </div>
    </div>
  );
};

export default PostBoxCard;
