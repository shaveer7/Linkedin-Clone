import {
  AddMediaIcon,
  ArrowDownIcon,
  CreateEventsIcon,
  CrossIcon,
  GrayPlusIcon,
  PlusIcon,
  StarburstIcon,
  TimeIcon,
} from "../../constants/icons";
import { ClockIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import GrayedButton from "./GrayedButton";
import Tooltip from "../smallComponents/Tooltip";
import EmojiPicker from "emoji-picker-react";
import ReactionModal from "../modals/ReactionModal";
import { useState } from "react";

const PostProfileModalButton = ({ onClose, open }) => {
  const [openNew, setOpenNew] = useState(true);

  console.log(openNew);

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <div className="px-5 py-5">
          <div className=" flex items-start justify-between">
            <div className="flex items-center justify-center hover:bg-[#E8E8E8] p-2 rounded-xl ">
              <img src="/shaveer.jpeg" className="h-14 w-13 mr-3 rounded-4xl" />
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-xl font-semibold">Shaveer Sajjad</div>
                  <ArrowDownIcon />
                </div>
                <div className="text-sm">Post to anyone</div>
              </div>
            </div>
            <div>
              <button
                onClick={onClose}
                className=" p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
              >
                <CrossIcon />
              </button>
            </div>
          </div>

          <textarea
            className="resize-none p-2.5 w-full focus:outline-none mt-5 placeholder:text-xl placeholder:text-[#666666]"
            placeholder="What do you want to talk about?"
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${Math.min(
                e.target.scrollHeight,
                240
              )}px`;
            }}
            style={{ maxHeight: "240px", overflowY: "auto" }}
          ></textarea>
        </div>
        <div>
          <button onClick={() => setOpenNew(true)}>
            <div className="mx-7 hover:bg-[#e8e8e8e3] flex items-center justify-center rounded-4xl h-9 w-9">
              <FaceSmileIcon height="25" width="25" />
            </div>
          </button>

          <div className="flex items-center gap-8 pt-6 pb-4 px-7">
            <Tooltip Icon={AddMediaIcon} tooltip="Add Media" />
            <Tooltip Icon={CreateEventsIcon} tooltip="Create an event" />
            <Tooltip Icon={StarburstIcon} tooltip="Celebrate an occasion" />
            <Tooltip Icon={GrayPlusIcon} tooltip="More" />
          </div>
          <div className="bg-[#E8E8E8] w-full h-0.5" />
          <div className="flex items-center gap-3 justify-end py-4 px-5">
            <div className="hover:bg-[#e8e8e8e3] rounded-4xl flex items-center justify-center h-[40px] w-[40px] pt-2 pb-0.5">
              <Tooltip Icon={TimeIcon} tooltip="Add Media" />
            </div>
            <GrayedButton title="Post" />
          </div>
        </div>
      </div>
      {openNew && (
        <ReactionModal open={openNew} onClose={() => setOpenNew(false)}>
          <div> <EmojiPicker /> </div>
        </ReactionModal>
      )}
    </>
  );
};

export default PostProfileModalButton;
