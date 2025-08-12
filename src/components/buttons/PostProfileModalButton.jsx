import { useState } from "react";
import {
  AddMediaIcon,
  ArrowDownIcon,
  BagModalIcon,
  CreateEventsIcon,
  CrossIcon,
  DocumentModalIcon,
  ExpertModalIcon,
  GrayPlusIcon,
  PollModalIcon,
  StarburstIcon,
  TimeIcon,
  UploadPostIcon,
} from "../../constants/icons";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import GrayedButton from "./GrayedButton";
import Tooltip from "../smallComponents/Tooltip";
import EmojiPicker from "emoji-picker-react";
import ReactionModal from "../modals/ReactionModal";
import AddMediaModal from "../modals/AddMediaModal";
import UploadButton from "./UploadButton";
import ColoredButton from "./ColoredButton";
import CreateEventModal from "../modals/CreateEventModal";
import EventModalContent from "../modals/EventModalContent";
import CelebrateOccasionModal from "../modals/CelebrateOccasionModal";
import CelebrateModalContent from "../modals/CelebrateModalContent";
import SelectCompanyModal from "../modals/SelectCompanyModal";
import CompanyModalContent from "../modals/CompanyModalContent";

const PostProfileModalButton = ({
  onClose,
  openNew,
  setOpenNew,
  openMedia,
  setOpenMedia,
  setOpen,
  openCreateEvent,
  setOpenCreateEvent,
  setOpenCelebrate,
  openCelebrate,
  openCompany,
  setOpenCompany,
}) => {
  const handleModalState = (e) => {
    e.stopPropagation();
    setOpenMedia(true);
  };

  const [openOccasion, setOpenOccasion] = useState(false);
  const [opentooltip, setOpenTooltip] = useState(false);
  const [openHiring,setOpenHiring] = useState(false)

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
                className=" p-3 rounded-lg text-gray-400 hover:bg-gray-100 hover:rounded-3xl hover:text-gray-600"
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
            <Tooltip
              onClick={(e) => handleModalState(e)}
              Icon={AddMediaIcon}
              tooltip="Add Media"
            />

            <Tooltip
              onClick={() => setOpenCreateEvent(true)}
              Icon={CreateEventsIcon}
              tooltip="Create an event"
            />
            <Tooltip
              onClick={() => setOpenCelebrate(true)}
              Icon={StarburstIcon}
              tooltip="Celebrate an occasion"
            />

            {opentooltip === true ? (
              <div className="flex items-center gap-8">
                <Tooltip
                  onClick={() => setOpenCompany(true)}
                  Icon={BagModalIcon}
                  tooltip="Share that you're hiring"
                />
                <Tooltip Icon={PollModalIcon} tooltip="Create a poll" />
                <Tooltip Icon={DocumentModalIcon} tooltip="Add a document" />
                <Tooltip Icon={ExpertModalIcon} tooltip="Find an expert" />
              </div>
            ) : (
              <Tooltip
                onClick={() => setOpenTooltip(true)}
                Icon={GrayPlusIcon}
                tooltip="More"
              />
            )}
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
      <ReactionModal open={openNew} onClose={() => setOpenNew(false)}>
        <div>
          <EmojiPicker />
        </div>
      </ReactionModal>

      <AddMediaModal open={openMedia} onClose={() => setOpenMedia(false)}>
        <div className="rounded-3xl p-1 h-[calc(100vh-20vh)] flex flex-col justify-between">
          <div className="flex items-center justify-between bg-white pl-7 pr-2 py-1">
            <div className="font-semibold text-xl">Editor</div>
            <button
              onClick={() => {
                setOpenMedia(false);
              }}
              className=" p-3 rounded-lg text-gray-400 hover:bg-gray-100 hover:rounded-3xl hover:text-gray-600"
            >
              <CrossIcon />
            </button>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="bg-[#E8E8E8] w-full h-0.5" />
            <div className="flex flex-col items-center justify-center gap-3 bg-[#F7FAFD] h-full">
              <UploadPostIcon />
              <div className="font-semibold text-2xl">
                Select files to begin
              </div>
              <div className="text-[#636465] pb-1">
                Share images or a single video in your post.
              </div>
              <UploadButton title="Upload from computer" />
            </div>
            <div className="bg-[#E8E8E8] w-full h-0.5" />
          </div>
          <div className="flex justify-end gap-3 px-4 py-2">
            <ColoredButton
              onClick={() => {
                setOpenMedia(false);
                // console.log("doneeee");
              }}
              title="Back"
            />
            <GrayedButton title="Next" />
          </div>
        </div>
      </AddMediaModal>
      <CreateEventModal
        open={openCreateEvent}
        onClose={() => setOpenCreateEvent(false)}
      >
        <EventModalContent
          openCreateEvent={openCreateEvent}
          setOpenCreateEvent={setOpenCreateEvent}
        />
      </CreateEventModal>

      <CelebrateOccasionModal
        open={openCelebrate}
        onClose={() => setOpenCelebrate(false)}
      >
        <CelebrateModalContent
          openCelebrate={openCelebrate}
          setOpenCelebrate={setOpenCelebrate}
          openOccasion={openOccasion}
          setOpenOccasion={setOpenOccasion}
        />
      </CelebrateOccasionModal>

      <SelectCompanyModal
        open={openCompany}
        onClose={() => setOpenCompany(false)}
      >
        <CompanyModalContent
          openCompany={openCompany}
          setOpenCompany={setOpenCompany}
          openHiring={openHiring}
          setOpenHiring={setOpenHiring}
        />
      </SelectCompanyModal>
    </>
  );
};

export default PostProfileModalButton;
