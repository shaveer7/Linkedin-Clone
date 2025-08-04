import UserLiked from "./UserLiked";
import FollowButtonWIthoutBorder from "../buttons/FollowButtonWIthoutBorder";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import PostReactions from "./PostReactions";
import PostActionsBar from "./PostActionsBar";

const PostCard = () => {
  return (
    <div className="bg-white rounded-lg w-full shadow-sm px-0 pt-2 pb-1 space-y-2">
      <div className="px-4">
        <UserLiked />
        <div className="bg-[#E8E8E8] w-full min-h-0.5 mt-2 mb-3" />
        <div className="flex justify-between items-start">
          <PostHeader />
          <FollowButtonWIthoutBorder />
        </div>
      </div>
        <PostContent />
      <div className="px-4">
        <PostReactions />
        <div className="bg-[#E8E8E8] w-full min-h-0.5 mb-1 mt-1" />
        <PostActionsBar />
      </div>
    </div>
  );
};

export default PostCard;
