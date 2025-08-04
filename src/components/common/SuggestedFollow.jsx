import React from "react";
import SuggestedFollowCard from "../cards/SuggestedFollowCard";
import { SignalNoticeIcon } from "../../constants/icons";

const SuggestedFollow = () => {
  return (
    <div className="rounded-lg py-4 px-4 border border-gray-300 shadow-sm bg-white">
      <div className="flex justify-between items-center pb-2">
        <div className="font-semibold text-sm mb-0">Add to your feed</div>
        <SignalNoticeIcon />
      </div>

      <SuggestedFollowCard
        companyName="Internee.pk"
        description="Company . Technology, Information and Internet"
      />
      <SuggestedFollowCard
        companyName="Contour Software"
        description="Company . IT Services and IT Consulting"
      />
      <SuggestedFollowCard
        companyName="Rachel Rappaport"
        description="Content Marketing Witch | Social media for Founders"
      />

      <a
        href="#"
        className="p-1 text-sm font-medium hover:bg-gray-200 text-start"
      >
        View all recommendations →
      </a>
    </div>
  );
};

export default SuggestedFollow;
