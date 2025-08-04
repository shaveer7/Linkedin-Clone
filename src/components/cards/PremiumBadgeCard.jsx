const PremiumBadgeCard = () => {
  return (
    <div className="group hover:cursor-pointer rounded-lg py-3 px-4 flex flex-col items-start border bg-white border-gray-300 shadow-sm w-full">
      <div className="text-xs text-gray-500" >Get 4x more profile views with Premium</div>
      <div className="flex flex-row items-center mt-1.5" >
        <img src={"/premium.png"} className="h-3.5 w-3.5 rounded-xs" />
        <div className="text-xs font-semibold pl-1 group-hover:text-[#0B65C2]" >Try for PKR0</div>
      </div>
    </div>
  );
};

export default PremiumBadgeCard;
