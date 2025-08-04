import { WorldIcon } from "../../constants/icons";

const PostHeader = () => {
  return (
    <div className="flex space-x-3">
      <img src="/userImg.jpeg" className="h-12 w-12 rounded-full" />
      <div>
        <div className="flex items-center gap-1">
          <h2 className="font-bold text-sm">Jhonatan Espinosa</h2>
        </div>
        <div className="text-xs text-gray-500">
          Operations Supervisor | Team Lead...
        </div>
        <div className="text-xs text-gray-400">
          9h •
          <span>
            <WorldIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
