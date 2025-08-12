import React, { useState } from "react";
import ColoredButton from "../buttons/ColoredButton";
import { CrossIcon } from "../../constants/icons";
import GrayedButton from "../buttons/GrayedButton";

const OccasionModalContent = ({ openOccasion, setOpenOccasion }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="rounded-3xl p-1 h-[calc(100vh-20vh)] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between bg-white pl-7 pr-2 py-1">
            <div className="font-semibold text-xl">Project launch</div>
            <button
              onClick={() => {
                setOpenOccasion(false);
              }}
              className="p-3 rounded-lg text-gray-400 hover:bg-gray-100 hover:rounded-3xl hover:text-gray-600"
            >
              <CrossIcon />
            </button>
          </div>
          <div className="bg-[#E8E8E8] w-full h-0.5" />
        </div>
        <div className="h-full overflow-y-scroll custom-scrollbar px-5 py-5">
          <div className="border border-[#E8E8E8]">
            <div className="bg-[#F4F2ED] flex flex-col items-center justify-center h-[22vw] [clip-path:ellipse(110%_86%_at_50%_5%)] overflow-hidden">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-full object-fill"
                />
              ) : (
                <>
                  <label className="cursor-pointer font-semibold text-[#0B65C2] hover:text-[#004182] hover:bg-[#d6e3f0] py-1 px-4.5 rounded-xs inline-block">
                    Add a Photo
                    <input type="file" className="hidden" />
                  </label>
                  <div className="text-sm text-[#62615F]">
                    Or select from below
                  </div>
                </>
              )}
            </div>

            <div className="font-semibold text-[#666666] text-base text-center pb-4">
              Launched a Project
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-4 pb-3">
            <div className="flex items-center justify-between w-full gap-4">
              <img
                className="w-[50%] cursor-pointer"
                src="/five.jpg"
                onClick={() => setSelectedImage("/five.jpg")}
              />
              <img
                className="w-[50%] cursor-pointer"
                src="/six.jpg"
                onClick={() => setSelectedImage("/six.jpg")}
              />
            </div>
            <div className="flex items-center justify-between w-full gap-4">
              <img
                className="w-[50%] cursor-pointer"
                src="/three.jpg"
                onClick={() => setSelectedImage("/three.jpg")}
              />
              <img
                className="w-[50%] cursor-pointer"
                src="/one.jpg"
                onClick={() => setSelectedImage("/one.jpg")}
              />
            </div>
            <div className="flex items-center justify-between w-full gap-4">
              <img
                className="w-[50%] cursor-pointer"
                src="/two.jpg"
                onClick={() => setSelectedImage("/two.jpg")}
              />
              <img
                className="w-[50%] cursor-pointer"
                src="/four.jpg"
                onClick={() => setSelectedImage("/four.jpg")}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#E8E8E8] w-full h-0.5" />
          <div className="flex justify-end gap-3 px-4 py-2">
            <ColoredButton
              onClick={() => {
                setOpenOccasion(false);
              }}
              title="Back"
            />
            <GrayedButton title="Next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccasionModalContent;
