const CelebrateOccasionButton = ({ title, description,onClick }) => {
  return (
    <button onClick={onClick} className="flex cursor-pointer flex-col items-start hover:bg-[#E8E8E8] px-4 py-4 w-full">
      <div className="font-semibold text-sm">{title}</div>
      <div className="text-xs text-[#666666]">{description}</div>
    </button>
  );
};

export default CelebrateOccasionButton;
