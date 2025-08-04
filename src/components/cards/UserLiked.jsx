import React from "react";

const UserLiked = () => {
  return (
    <div className="flex items-center gap-2" >
      <img src="/userImg.jpeg" className="h-6 w-6 rounded-4xl" />
      <div className="text-sm text-gray-500 mb-1">
        <span className="font-medium text-black">Muhammad Mursil</span> likes
        this
      </div>
    </div>
  );
};

export default UserLiked;
