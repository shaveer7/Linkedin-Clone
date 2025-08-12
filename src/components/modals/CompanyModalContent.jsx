import ColoredButton from "../buttons/ColoredButton";
import { CrossIcon } from "../../constants/icons";
import CompanyModalButton from "../buttons/CompanyModalButton";
import CompanyHiringModal from "./CompanyHiringModal";
import CompanyHiringContent from "./CompanyHiringContent";

const CompanyModalContent = ({
  openCompany,
  setOpenCompany,
  setOpenHiring,
  openHiring,
}) => {
  return (
    <>
      <div className="rounded-3xl p-1 h-fit flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between bg-white pl-7 pr-2 py-1">
            <div className="font-semibold text-xl">Project launch</div>
            <button
              onClick={() => {
                setOpenCompany(false);
              }}
              className=" p-3 rounded-lg text-gray-400 hover:bg-gray-100 hover:rounded-3xl hover:text-gray-600"
            >
              <CrossIcon />
            </button>
          </div>
          <div className="bg-[#E8E8E8] w-full h-0.5" />
        </div>
        <div className="h-full overflow-y-scroll custom-scrollbar px-5 py-6">
          <div className="flex flex-col items-start gap-2">
            <CompanyModalButton
              onClick={() => setOpenHiring(true)}
              source="/tdc.jpeg"
              title="The Dev Corporate"
            />
            <div className="bg-[#E8E8E8] w-full h-0.5 my-6" />
            <CompanyModalButton
              onClick={() => setOpenHiring(true)}
              source="/nextelPro.jpeg"
              title="NexTel Pro"
            />
          </div>
        </div>
        <div>
          <div className="bg-[#E8E8E8] w-full h-0.5" />
          <div className="flex justify-end gap-3 px-4 py-2">
            <ColoredButton
              onClick={() => {
                setOpenCompany(false);
              }}
              title="Back"
            />
          </div>
        </div>
      </div>
      <CompanyHiringModal
        open={openHiring}
        onClose={() => setOpenHiring(false)}
      >
        <CompanyHiringContent
          openHiring={openHiring}
          setOpenHiring={setOpenHiring}
        />
      </CompanyHiringModal>
    </>
  );
};

export default CompanyModalContent;
