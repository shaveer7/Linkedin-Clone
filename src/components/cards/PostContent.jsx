import React from "react";

const PostContent = () => {
  return (
    <div className="text-sm">
      <div className="px-4 mb-2">
        <p className="mb-1 font-medium">Hi Guys</p>
        <p className="truncate max-w-[30vw]">
          I hope you're having a great day. Today's post is about the agenda
          about problems our interns are facing{" "}
        </p>
      </div>
      <img src="/postContent.jpeg" className="w-full h-full" />
    </div>
  );
};

export default PostContent;
