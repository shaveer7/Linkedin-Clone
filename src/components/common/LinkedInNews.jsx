import { EyeIcon, RightIcon } from "../../constants/icons";
import FollowButton from "../buttons/FollowButton";

const LinkedInNews = () => {
  return (
    <div className="rounded-lg border w-full p-4 border-gray-400 bg-white shadow-sm">
      <p className="font-semibold text-sm mb-2">Today’s puzzle</p>
      <div className="flex items-center gap-3">
        <img
          src="https://static.licdn.com/aero-v1/sc/h/3nbta1n5ale6ewdbbwf38ki6d"
          alt="Puzzle"
          className="w-12 h-12 rounded"
        />
        <div className="flex-1">
          <p className="font-medium text-sm leading-snug">
            Zip – a quick brain teaser
          </p>
          <p className="text-xs text-gray-500">Solve in 60s or less!</p>
        </div>
        <RightIcon />
      </div>
      <div className="flex items-center mt-2 text-xs text-gray-400 gap-1">
        <EyeIcon />
        <span>Score is private to you</span>
      </div>
    </div>
  );
};

export default LinkedInNews;

