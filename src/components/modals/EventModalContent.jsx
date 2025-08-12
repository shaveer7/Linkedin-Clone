import { useState } from "react";

import {
  CrossIcon,
  ExternalLinkIcon,
  LinkedinLiveIcon,
  MinusCornerIcon,
  SearchSpeakerIcon,
  SmallArrowDownIcon,
  UploadEventIcon,
} from "../../constants/icons";
import ColoredButton from "../buttons/ColoredButton";
import GrayedButton from "../buttons/GrayedButton";
import TimePickerButton from "../buttons/TimePickerButton";
import DatePickerButton from "../buttons/DataPickerButton";

const EventModalContent = ({ openCreateEvent, setOpenCreateEvent }) => {
  const [selected, setSelected] = useState("first");
  const [eventformat, setEventFormat] = useState(false);
  const [checkboxSelected, setCheckboxSelected] = useState(false);

  return (
    <div>
      <div className="rounded-3xl p-1 h-[calc(100vh-20vh)] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between bg-white pl-7 pr-2 py-1">
            <div className="font-semibold text-xl">Create an event</div>
            <button
              onClick={() => {
                setOpenCreateEvent(false);
              }}
              className=" p-3 rounded-lg text-gray-400 hover:bg-gray-100 hover:rounded-3xl hover:text-gray-600"
            >
              <CrossIcon />
            </button>
          </div>
          <div className="bg-[#E8E8E8] w-full h-0.5" />
        </div>
        <div className="h-full overflow-y-scroll custom-scrollbar">
          <label className="cursor-pointer bg-[#F4F2ED] flex flex-col items-center justify-center h-[20vw]">
            <UploadEventIcon />
            <div className="pt-2 font-semibold">Upload cover image</div>
            <div className="text-sm text-[#666666]">
              Minimum width 480 pixels, 16:9 recommended
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  console.log("Selected file:", file);
                }
              }}
            />
          </label>
          <div className="px-5 py-8">
            <div className="text-[#666666] text-sm">Event Type</div>
            <div className="flex items-center gap-5 mt-3 group">
              <button
                onClick={() => setSelected("first")}
                className="flex items-center group cursor-pointer"
              >
                <div
                  className={
                    selected === "first"
                      ? "h-6 w-6 rounded-3xl bg-white transition-all shadow-[inset_0_0_0_6px_#02754F] hover:shadow-[inset_0_0_0_6px_#004733]"
                      : "h-6 w-6 rounded-3xl border bg-white transition-all group-hover:shadow-[inset_0_0_0_1.5px_black]"
                  }
                />
                <div className="ml-2">Online</div>
              </button>

              <button
                onClick={() => setSelected("second")}
                className="flex items-center group cursor-pointer ml-4"
              >
                <div
                  className={
                    selected === "second"
                      ? "h-6 w-6 rounded-3xl bg-white transition-all shadow-[inset_0_0_0_6px_#02754F] hover:shadow-[inset_0_0_0_6px_#004733]"
                      : "h-6 w-6 rounded-3xl border bg-white transition-all group-hover:shadow-[inset_0_0_0_1.5px_black]"
                  }
                />
                <div className="ml-2">In person</div>
              </button>
            </div>

            {selected === "first" ? (
              <>
                <div className="text-sm mt-5 mb-1">Event format*</div>

                <div className="relative">
                  <button
                    onClick={() => setEventFormat((prev) => !prev)}
                    className="flex items-center justify-between border rounded-sm px-2 py-1.5 cursor-pointer w-full hover:shadow-[inset_0_0_0_1px_black] transition-all"
                  >
                    <div className="text-[#666666] text-sm">Select</div>
                    <SmallArrowDownIcon />
                  </button>

                  {eventformat && (
                    <div className="absolute left-0 w-full border border-t-0 rounded-bl-sm rounded-br-sm shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] bg-white z-10">
                      <div
                        onClick={() => setEventFormat(false)}
                        className="flex items-start gap-2 px-2.5 py-1.5 hover:bg-[#f3f3f3] cursor-pointer"
                      >
                        <LinkedinLiveIcon className="mt-1" />
                        <div className="flex flex-col items-start">
                          <div className="font-semibold text-sm">
                            Linkedin Live
                          </div>
                          <div className="text-xs">
                            Stream from a 3rd party tool. Attendees join on
                            LinkedIn to watch and comment.
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => setEventFormat(false)}
                        className="flex items-start gap-2 px-2.5 py-1.5 hover:bg-[#f3f3f3] cursor-pointer"
                      >
                        <ExternalLinkIcon className="mt-1" />
                        <div className="flex flex-col items-start">
                          <div className="font-semibold text-sm">
                            External event link
                          </div>
                          <div className="text-xs">
                            Share event details on LinkedIn. Enter an external
                            link for participants to join.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-sm mt-5 mb-1">Event name*</div>
                <input
                  type="text"
                  className="flex items-center justify-between hover:shadow-[inset_0_0_0_1px_black] border rounded-sm px-2 py-1 w-full transition-all"
                />
              </>
            ) : (
              <div>
                <div className="text-sm mt-5 mb-1">Event name*</div>
                <input
                  type="text"
                  className="flex items-center justify-between hover:shadow-[inset_0_0_0_1px_black] border rounded-sm px-2 py-1 w-full transition-all"
                />
              </div>
            )}

            <div className="bg-[#E8E8E8] w-full h-0.5 my-10" />

            <div className="flex items-center justify-between gap-2">
              <DatePickerButton
                onClick={() => setDatePicker(true)}
                datatitle="Start Date"
              />
              <TimePickerButton timetitle="Start Time" />
            </div>

            <button
              onClick={() => setCheckboxSelected((prev) => !prev)}
              className="flex items-center gap-2 mt-6 group w-full cursor-pointer"
            >
              <div className="flex items-center cursor-pointer">
                {checkboxSelected === false ? (
                  <div className="h-6 w-6 rounded-sm border bg-red transition-all group-hover:shadow-[inset_0_0_0_1.5px_black]" />
                ) : (
                  <div className="h-6 w-6 rounded-sm transition-all bg-[#02754F] border hover:bg-[#004733] text-white">
                    ✓
                  </div>
                )}
              </div>
              <div>Add end date and time</div>
            </button>

            {checkboxSelected === true ? (
              <div className="flex items-center justify-between gap-2">
                <DatePickerButton
                  onClick={() => setDatePicker(true)}
                  datatitle="End Date"
                />
                <TimePickerButton timetitle="End Time" />
              </div>
            ) : (
              <div />
            )}

            <div className="flex mt-1 items-center gap-1">
              <MinusCornerIcon />
              <div className="text-[#CB112D] font-semibold text-sm">
                Please check the date and time entered
              </div>
            </div>

            <div className="text-sm mt-5 mb-1 text-[#404040]">Description</div>
            <textarea
              className="w-full p-2 border rounded resize hover:shadow-[inset_0_0_0_1px_black] transition-all placeholder-[#666666]"
              placeholder="Ex. topics, schedule, etc."
              rows={3}
            ></textarea>

            <div className="text-sm mt-5 mb-1 text-[#404040]">Speakers</div>
            <div className="flex items-center gap-1 hover:shadow-[inset_0_0_0_1px_black] border rounded-sm px-2 py-1 transition-all">
              <SearchSpeakerIcon />
              <input type="text" className="w-full " />
            </div>
            <div className="text-xs text-[#6e6d6d] leading-6 tracking-">
              Add connections to speak at the event. Speakers can join the event
              early and will be shown in the event’s Details section and
              presenter area. They cannot allow attendees to speak or end the
              event.
            </div>
            <div className="text-xs text-[#6e6d6d] tracking-wide mt-4.5">
              By continuing, you agree with{" "}
              <span className="text-[#0B65C2] font-semibold cursor-pointer tracking-normal hover:border-b hover:border-[#0B65C2]">
                LinkedIn’s event policy.
              </span>
            </div>
            <div className="text-xs text-[#6e6d6d] tracking-wide mt-3.5 pb-2.5">
              Make the most of LinkedIn Events.
              <span className="text-[#0B65C2] font-semibold cursor-pointer tracking-normal hover:border-b hover:border-[#0B65C2]">
                Learn more
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#E8E8E8] w-full h-0.5" />
          <div className="flex justify-end gap-3 px-4 py-2">
            <ColoredButton
              onClick={() => {
                setOpenCreateEvent(false);
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

export default EventModalContent;
