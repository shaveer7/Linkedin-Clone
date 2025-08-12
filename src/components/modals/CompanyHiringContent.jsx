import { useState } from "react";
import {
  CrossIcon,
  ExternalLinkIcon,
  LinkedinLiveIcon,
  SmallArrowDownIcon,
} from "../../constants/icons";
import ColoredButton from "../buttons/ColoredButton";

const CompanyHiringContent = ({ setOpenHiring, openHiring }) => {
  const [workPlaceType, setWorkPlaceType] = useState(false);
  return (
    <div className="rounded-3xl p-1 h-[calc(100vh-20vh)] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between bg-white pl-7 pr-2 py-1">
          <div className="font-semibold text-xl">Project launch</div>
          <button
            onClick={() => {
              setOpenHiring(false);
            }}
            className=" p-3 rounded-lg text-gray-400 hover:bg-gray-100 hover:rounded-3xl hover:text-gray-600"
          >
            <CrossIcon />
          </button>
        </div>
        <div className="bg-[#E8E8E8] w-full h-0.5" />
      </div>
      <div className="h-full overflow-y-scroll custom-scrollbar px-5 py-6">
        <div className="text-sm mt-5 mb-1 text-[#666666]">Job Title</div>
        <input
          type="text"
          placeholder="Add the title you are hiring for"
          className="flex items-center justify-between placeholder:text-sm hover:shadow-[inset_0_0_0_1px_black] border rounded-sm px-2 py-1 w-full transition-all"
        />
        <div className="text-sm mt-5 mb-1 text-[#666666]">Company</div>
        <div className="flex items-center hover:shadow-[inset_0_0_0_1px_black] border rounded-sm w-full transition-all">
          <img src="/linkedin.png" className="h-7 w-8 pl-1" />
          <input type="text" className=" px-2 py-1 w-full" />
        </div>

        <div className="text-sm mt-5 mb-1 text-[#666666]">Workplace type</div>
        <div className="relative">
          <button
            onClick={() => setWorkPlaceType((prev) => !prev)}
            className="flex items-center justify-between border rounded-sm px-2 py-1.5 cursor-pointer w-full hover:shadow-[inset_0_0_0_1px_black] transition-all"
          >
            <div className="text-[#666666] text-sm">Select</div>
            <SmallArrowDownIcon />
          </button>
          {workPlaceType && (
            <div className="absolute left-0 mt-2 w-full border border-[#e8e8e8] py-1 rounded-sm shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] bg-white z-10">
              <div className="flex flex-col items-start gap-2 px-2.5 py-1.5 hover:bg-[#f3f3f3] cursor-pointer">
                <div className="flex flex-col items-start">
                  <div className="font-semibold text-sm text-[#4d4d4d]">
                    On-site
                  </div>
                  <div className="text-xs text-[#666666]">
                    Employees comes to work in-person.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 px-2.5 py-1.5 hover:bg-[#f3f3f3] cursor-pointer">
                <div className="flex flex-col items-start">
                  <div className="font-semibold text-sm text-[#4d4d4d]">
                    Hybrid
                  </div>
                  <div className="text-xs text-[#666666]">
                    Employees work on-site and off-site.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 px-2.5 py-1.5 hover:bg-[#f3f3f3] cursor-pointer">
                <div className="flex flex-col items-start">
                  <div className="font-semibold text-sm text-[#4d4d4d]">
                    On-site
                  </div>
                  <div className="text-xs text-[#666666]">
                    Employees come to work in-person.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="bg-[#E8E8E8] w-full h-0.5" />
        <div className="flex justify-end gap-3 px-4 py-2">
          <ColoredButton
            onClick={() => {
              setOpenHiring(false);
            }}
            title="Back"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyHiringContent;
