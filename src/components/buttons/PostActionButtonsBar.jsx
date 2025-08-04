import {
  ArticleIcon,
  BlueVideoIcon,
  GreenVideoIcon,
} from "../../constants/icons";
import PostActionButton from "./PostActionButton";

const PostActionButtonsBar = () => {
  return (
    <div>
      <div className="flex justify-around w-full pb-1">
        <PostActionButton label="Video" Icon={GreenVideoIcon} />
        <PostActionButton label="Photo" Icon={BlueVideoIcon} />
        <PostActionButton label="Write article" Icon={ArticleIcon} />
      </div>
    </div>
  );
};

export default PostActionButtonsBar;
