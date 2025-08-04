const Tooltip = ({Icon,tooltip}) => {
  return (
    <div>
      <div className="relative group inline-block">
        <Icon/>
        <div
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 -translate-y-2 
                  group-hover:translate-y-0 border border-[#E8E8E8] bg-white text-sm rounded-lg shadow-[5px_12px_6px_-5px_rgba(0,_0,_0,_0.1)]
                  px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-200 
                  pointer-events-none whitespace-nowrap z-10"
        >
          {tooltip}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
