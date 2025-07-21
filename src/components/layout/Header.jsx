import {
  DropDownIcon,
  GridDotsIcon,
  HomeIcon,
  JobIcon,
  MessageIcon,
  NetworkIcon,
  NotificationIcon,
} from "../../constants/icons";
import NavigationButton from "../buttons/NavigationButton";

function Header() {
  return (
    <div className="flex items-center justify-center bg-white w-full py-2">
      <div className="col-span-4 flex items-center">
        <img
          src={"/linkedin.png"}
          className="h-10 rounded-b-sm"
          alt="LinkedIn"
        />
        <div className="ml-1 transition-all duration-300 ease-in-out w-74 focus-within:w-90 flex items-center bg-white border border-gray-400 rounded-3xl px-4">
          <img src={"/searchIcon.png"} className="h-4 w-4 mr-1" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full py-1.5 outline-none"
          />
        </div>
      </div>
      <div className="col-span-8">
        <div className="flex items-center">
          <NavigationButton Icon={HomeIcon} label={"Home"} />
          <NavigationButton Icon={NetworkIcon} label={"Network"} />
          <NavigationButton Icon={JobIcon} label={"Jobs"} />
          <NavigationButton Icon={MessageIcon} label={"Messages"} />
          <NavigationButton Icon={NotificationIcon} label={"Notification"} />
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-6 w-6 rounded-full object-fill"
              src={"/userImg.jpeg"}
            />
            <div className="flex items-center justify-center">
              <div>Me</div>
              <DropDownIcon />
            </div>
          </div>
          <div className="bg-black/35 w-[1px] h-14 ml-5 mr-2"></div>
          <div className="flex flex-col items-center justify-center">
            <GridDotsIcon />
            <div className="flex items-center justify-center">
              <div className="text-sm">For Business</div>
              <DropDownIcon />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/premium.png" alt="" className="h-5 w-fit" />
            <div className="text-sm">Try Premium for PKR0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
