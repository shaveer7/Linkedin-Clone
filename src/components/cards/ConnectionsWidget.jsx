import React from "react";
import ConnectionsComp from "../smallComponents/connectionsComp";

const ConnectionsWidget = () => {
  return (
    <div className="rounded-lg py-4 px-4 border border-gray-300 shadow-sm gap-2 bg-white w-full flex flex-col">
      <ConnectionsComp label="Profile Viewers" count="5" />
      <ConnectionsComp label="Post Impressions" count="8" />
    </div>
  );
};

export default ConnectionsWidget;
