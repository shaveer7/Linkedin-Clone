import ColoredButton from "../buttons/ColoredButton";
import { CrossIcon } from "../../constants/icons";
import CelebrateOccasionButton from "../buttons/CelebrateOccasionButton";
import { useState } from "react";
import OccasionModal from "./OccasionModal";
import OccasionModalContent from "./OccasionModalContent";

const CelebrateModalContent = ({
  setOpenCelebrate,
  open,
  openCelebrate,
  openOccasion,
  setOpenOccasion,
}) => {
  return (
    <div>
      <div className="rounded-3xl flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between bg-white pl-7 pr-2 py-1">
            <div className="font-semibold text-xl">Select an option</div>
            <button
              onClick={() => {
                setOpenCelebrate(false);
              }}
              className=" p-3 rounded-lg text-gray-400 hover:bg-gray-100 hover:rounded-3xl hover:text-gray-600"
            >
              <CrossIcon />
            </button>
          </div>
          <div className="bg-[#E8E8E8] w-full h-0.5" />
        </div>
        <div className="flex flex-col items-start">
          <CelebrateOccasionButton
            onClick={() => {
              setOpenOccasion(true);
            }}
            title="Project Launch"
            description="Share a new project milestone"
          />
          <div className="bg-[#E8E8E8] w-full h-0.5" />
          <CelebrateOccasionButton
            onClick={() => {
              setOpenOccasion(true);
            }}
            title="Work Anniversary"
            description="Celebrate a career milestone"
          />
          <div className="bg-[#E8E8E8] w-full h-0.5" />
          <CelebrateOccasionButton
            onClick={() => {
              setOpenOccasion(true);
            }}
            title="New Position"
            description="Share a job update"
          />
          <div className="bg-[#E8E8E8] w-full h-0.5" />
          <CelebrateOccasionButton
            onClick={() => {
              setOpenOccasion(true);
            }}
            title="New Educational Milestone"
            description="Share an educational milestone"
          />
          <div className="bg-[#E8E8E8] w-full h-0.5" />
          <CelebrateOccasionButton
            onClick={() => {
              setOpenOccasion(true);
            }}
            title="New Certification"
            description="Celebrate a new certification"
          />
        </div>
        <div>
          <div className="bg-[#E8E8E8] w-full h-0.5" />
          <div className="flex justify-end gap-3 px-4 py-2">
            <ColoredButton
              onClick={() => {
                setOpenCelebrate(false);
              }}
              title="Back"
            />
          </div>
        </div>
      </div>
      <OccasionModal open={openOccasion} onClose={() => setOpenOccasion(false)}>
        <OccasionModalContent
          openOccasion={openOccasion}
          setOpenOccasion={setOpenOccasion}
        />
      </OccasionModal>
    </div>
  );
};

export default CelebrateModalContent;
