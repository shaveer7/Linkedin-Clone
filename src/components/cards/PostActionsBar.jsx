import {
  CommentIcon,
  LikeIcon,
  RepostIcon,
  SendIcon,
} from "../../constants/icons";
import PostReactionButton from "./PostReactionButton";

const PostActionsBar = () => {
  return (
    <div className="flex justify-between text-gray-600 text-sm">
      <PostReactionButton Icon={LikeIcon} name="Like" />
      <PostReactionButton Icon={CommentIcon} name="Comment" />
      <PostReactionButton Icon={RepostIcon} name="Repost" />
      <PostReactionButton Icon={SendIcon} name="Send" />
    </div>
  );
};

export default PostActionsBar;
